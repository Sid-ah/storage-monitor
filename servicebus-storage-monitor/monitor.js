require('dotenv').config();
const axios = require('axios');
const { ClientSecretCredential } = require('@azure/identity');

(async () => {
  // Load environment variables
  const {
    TENANT_ID,
    CLIENT_ID,
    CLIENT_SECRET,
    SUBSCRIPTION_ID,
    RESOURCE_GROUP,
    NAMESPACE_NAME,
  } = process.env;

  // Validate environment variables
  if (
    !TENANT_ID ||
    !CLIENT_ID ||
    !CLIENT_SECRET ||
    !SUBSCRIPTION_ID ||
    !RESOURCE_GROUP ||
    !NAMESPACE_NAME
  ) {
    console.error('Please ensure all environment variables are set in the .env file.');
    process.exit(1);
  }

  // Authenticate using Client Credentials
  const credential = new ClientSecretCredential(TENANT_ID, CLIENT_ID, CLIENT_SECRET);

  try {
    // Get access token
    const tokenResponse = await credential.getToken('https://management.azure.com/.default');
    const accessToken = tokenResponse.token;

    // Construct the metrics API URL
    const resourceId = `/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.ServiceBus/namespaces/${NAMESPACE_NAME}`;
    const apiVersion = '2023-01-01';
    const metricNames = 'Size';
    const url = `https://management.azure.com${resourceId}/providers/microsoft.insights/metrics?api-version=${apiVersion}&metricnames=${metricNames}`;

    // Make the API request
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Parse the response
    const metrics = response.data.value[0];
    const timeseries = metrics.timeseries[0];
    const dataPoints = timeseries.data;

    if (dataPoints.length === 0) {
      console.log('No data available for the specified metric.');
      return;
    }

    // Get the latest data point
    const latestDataPoint = dataPoints[dataPoints.length - 1];
    const sizeInBytes = latestDataPoint.total;
    const sizeInGB = sizeInBytes / (1024 ** 3);

    console.log(`Current Service Bus Namespace Storage Usage: ${sizeInGB.toFixed(2)} GB`);
  } catch (error) {
    if (error.response) {
      console.error(`API Error: ${error.response.status} ${error.response.statusText}`);
      console.error(`Details: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
  }
})();
