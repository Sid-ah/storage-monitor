# Azure Service Bus Storage Monitor

This Node.js script helps you monitor your Azure Service Bus namespace storage usage in GB by interacting with the Azure Monitor Metrics REST API.

## Prerequisites

- **Node.js and npm**: Ensure you have Node.js and npm installed.
- **Azure Service Bus Namespace**: An existing Azure Service Bus namespace.
- **Azure Active Directory Application**:
  - **Client ID** (Application ID)
  - **Tenant ID**
  - **Client Secret**
- **Permissions**:
  - The AAD application must have the **"Monitoring Reader"** role or equivalent access to read metrics.
  - The application should have access to the Service Bus namespace.

## Setup Instructions

1. Clone or Download the Repository

```bash
git clone https://github.com/Sid-ah/storage-monitor.git
cd servicebus-storage-monitor
```

2. Install Dependencies
```bash
npm install
```

3. Configure Environment Variables
Create a .env file in the root directory:


```ini
TENANT_ID=your_tenant_id
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
SUBSCRIPTION_ID=your_subscription_id
RESOURCE_GROUP=your_resource_group_name
NAMESPACE_NAME=your_service_bus_namespace
```

4. Run the Script

```bash
node monitor.js
```