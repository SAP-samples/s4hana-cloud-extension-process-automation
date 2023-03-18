# Prerequisites

This section contains the prerequisites that you have to fulfill before you get started. Make sure that the prerequisites are fulfilled and all required systems, services, and tools are available.

## Systems and Accounts

* [SAP S/4HANA](https://www.sap.com/india/products/s4hana-erp.html) system
* [Global account](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/)
* [SAP S/4HANA](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE) system
* [Optional] If you don't have an SAP S/4HANA system you can run this mission by installing a [mock server](../../deploy/setup-mock/README.md).

## Tools

* [Node.js](https://nodejs.org/en/download/) - find the latest Node.js version supported by [CAP](https://cap.cloud.sap/docs/advanced/troubleshooting#node-version).
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Visual Studio Code](https://code.visualstudio.com/download) or another suitable IDE or editor of your choice
* [cds-dk](https://cap.cloud.sap/docs/get-started/)
* (For Windows) [SQLite ](https://sqlite.org/download.html) Find the steps how to install it in the CAP documentation in section [How Do I Install SQLite](https://cap.cloud.sap/docs/advanced/troubleshooting#how-do-i-install-sqlite-on-windows).

## On SAP BTP Side

### SAP BTP Provider Account

* SAP BTP [subaccount](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/8ed4a705efa0431b910056c0acdbf377.html?locale=en-US#loio8d6e3a0fa4ab43e4a421d3ed08128afa)
* Cloud Foundry Space in SAP BTP

### Entitlements

The application requires the following [Entitlements and Quotas](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/00aa2c23479d42568b18882b1ca90d79.html?locale=en-US) in the SAP BTP cockpit:

| Service                           | Plan       | Number of Instances |
|-----------------------------------|------------|:-------------------:|
| SAP HANA Schemas & HDI Containers | hdi-shared |          1          |
| SAP HANA Cloud                    | hana       |          1          |
| Cloud Foundry Runtime             | MEMORY     |          2          |
| Event Mesh                        | default    |          1          |
| Destination Service               | lite       |          1          |
| Connectivity Service              | proxy      |          1          |
| SAP Build Work Zone, standard edition | standard (Application) |  Subscription       |
| SAP Build Process Automation      | standard   |          1          |
| SAP Build Process Automation      | standard (Application) |  Subscription |

Optional Subscriptions:

| Service                           | Plan       | Number of Instances |
|-----------------------------------|------------|:-------------------:|
| SAP Business Application Studio   | standard   |          1          |
| Event Mesh                        | standard   |          1          |

[SAP Business Application](https://help.sap.com/docs/bas) Studio offers a modern development environment tailored for efficient development of business applications for the SAP Intelligent Enterprise.

[SAP Event Mesh](https://help.sap.com/docs/SAP_EM) is a fully managed cloud service that allows applications to communicate through asynchronous events. Create responsive applications that work independently and participate in event-driven business processes across your business ecosystem for greater agility and scalability.