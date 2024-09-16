# Storage Monitoring

## Overview
This project is designed to monitor and report the storage usage of Azure Service Bus namespaces and Azure Search services. It aims to provide real-time insights into the storage consumption of these services.

## Features
- Monitor Azure Service Bus namespace storage usage
- Monitor Azure Search service storage usage
- Report storage usage in gigabytes (GB)

## Installation
To install the project, follow these steps:
1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies: `npm install`

## Usage
To use the project, follow these steps:

### Monitor Azure Service Bus Namespace Storage Usage
1. Ensure you have the following environment variables set in a `.env` file:
    ```plaintext
    TENANT_ID=your-tenant-id
    CLIENT_ID=your-client-id
    CLIENT_SECRET=your-client-secret
    SUBSCRIPTION_ID=your-subscription-id
    RESOURCE_GROUP=your-resource-group
    NAMESPACE_NAME=your-namespace-name
    ```
2. Run the script:
    ```sh
    node monitor.js
    ```

### Monitor Azure Search Service Storage Usage
1. Ensure you have the following environment variables set in a `.env` file:
    ```plaintext
    SERVICE_NAME=your-service-name
    API_KEY=your-api-key
    ```
2. Run the script:
    ```sh
    node monitor.js-1
    ```

## Contributing
If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a pull request