The Cloud Connector:
* Serves as a link between SAP BTP applications and on-premise systems.
* Runs as on-premise agent in a secured network.
* Provides fine-grained control over:
  * On-premise systems and resources that can be accessed by cloud applications.
  * Cloud applications using the Cloud Connector.
* Lets you use the features that are required for business-critical enterprise scenarios.

These are some of the benefits of using the Cloud Connector:
* Does not require on on-premise firewall to allow external access from SAP BTP to internal systems. For allowed outbound connections, no modifications are required.
* Supports HTTP as well as additional protocols. For example, the RFC protocol supports native access to ABAP systems by invoking function modules.
* Connects on-premise databases or BI tools to SAP HANA databases in the cloud.
* Allows you to propagate the identity of cloud users to on-premise systems in a secure way.
* Includes easy installation and configuration, which means that the Cloud Connector comes with a low total cost of ownership (TCO) and is tailored to fit your cloud scenarios.
* Comes with a standard support from SAP.

See [SAP Help Portal: Cloud Connector](https://help.sap.com/docs/CP_CONNECTIVITY/cca91383641e40ffbe03bdc78f00f681/e6c7616abb5710148cfcf3e75d96d596.html).

**Note**: You can skip the installation of Cloud Connector, if you are using a SAP Cloud Appliance Library demo backend system. There is a Cloud Connector pre-installed and ready to be used. Check the **Welcome** page in your SAP Cloud Appliance Library system for the links, it usually runs in **http://<IP-of-your-SAP-Cloud-Appliance-Library-backend>:8443/**.
