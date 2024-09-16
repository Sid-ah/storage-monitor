require('dotenv').config();
const axios = require('axios');

(async () => {
  const serviceName = process.env.SERVICE_NAME;
  const apiKey = process.env.API_KEY;
  const apiVersion = '2024-07-01';
  const url = `https://${serviceName}.search.windows.net/servicestats?api-version=${apiVersion}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    const storageSizeInBytes = response.data.counters.storageSize;
    const storageSizeInGB = storageSizeInBytes / (1024 ** 3);

    console.log(`Current storage usage: ${storageSizeInGB.toFixed(2)} GB`);
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.status} ${error.response.statusText}`);
      console.error(`Details: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
  }
})();
