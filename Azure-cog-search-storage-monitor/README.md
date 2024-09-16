
# Azure Cognitive Search Storage Monitor

This Node.js script helps you monitor your Azure Cognitive Search storage usage in GB by interacting with the Azure Search Service Statistics API.

## Prerequisites

- **Node.js and npm**: Ensure you have Node.js and npm installed on your machine.
- **Azure Cognitive Search Service**: An existing Azure Cognitive Search service with access to the admin API key.

## Setup Instructions

### 1. Clone or Download the Repository

```bash
git clone  https://github.com/Sid-ah/storage-monitor.git
cd storage-monitor
```

2. Install Dependencies

```bash
npm install
```

3. Configure the Script
Open monitor.js and replace the placeholders with your service details:

```bash

const serviceName = 'YOUR_SERVICE_NAME'; // Replace with your service name
const apiKey = 'YOUR_ADMIN_API_KEY';     // Replace with your admin API key
```

4. Run the Script

```bash
bash
Copy code
node monitor.js
```

5. Using Environment Variables

rename .env.example file to in the root directory and replace it with correct variables:

```bash
SERVICE_NAME=your_service_name
API_KEY=your_admin_api_key
```
