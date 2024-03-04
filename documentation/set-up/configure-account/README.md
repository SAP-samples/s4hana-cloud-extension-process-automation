# Create SAP HANA Cloud Service Instance in SAP BTP

### Create a SAP HANA Cloud Service Instance

For this mission, an SAP HANA service for SAP BTP is necessary. Use the following steps create a SAP HANA Cloud instance:

Use the following steps to create an SAP HANA Cloud instance on SAP BTP:

1. Navigate to SAP HANA Cloud Subscription Application:

    - In SAP BTP cockpit navigate to the **Services** &rarr; **Instances and Subscriptions** and **SAP HANA Cloud**.
    - Select the three dots and choose **Go to Application**.

    ![HANA](./images/hanatools.png)

2. You will be logged in to SAP HANA Cloud Central. Choose **Create Instance**.

3. Choose the type of SAP HANA Cloud instance as **SAP HANA Cloud, SAP HANA Database** and select **Next Step**.

   ![HANA](./images/createDatabase02.png)

4. In the next tab, Enter an **Instance name**, enter a valid database **Administrator Password**, **confirm Administrator Password** and select **Next Step**.

   ![HANA](./images/createDatabase03.png)

5. Select the **Memory** and **Storage** capacity for your SAP HANA Cloud database instance. For this mission, you can choose the minimum capacity and select **Next Step**.

   ![HANA](./images/createDatabase04.png)

6. In the tab for Availability Zone and Replicas, you can leave the defaults and choose **Next Step**.

   ![HANA](./images/createDatabase05.png)

7. In the tab for SAP HANA Advanced Settings, choose **Allow all IP Addresses** and choose **Review and Create**.

   ![HANA](./images/createDatabase06.png)

8. Choose **Create Instance** to create an instance of SAP HANA Cloud Database instance.

    ![HANA](./images/createDatabase07.png)

See section [Create an SAP HANA Database Instance Using SAP HANA Cloud Central](https://help.sap.com/docs/HANA_CLOUD/9ae9104a46f74a6583ce5182e7fb20cb/784a1dbb421a4da29fb1e3bdf5f198ec.html) on SAP Help Portal for more details.

There is a checklist that helps you ensure you have configured properly your global account. See [Getting Started Checklist](https://help.sap.com/viewer/df50977d8bfa4c9a8a063ddb37113c43/Cloud/en-US/cbd76632d8aa4cb7bbf175d7607db463.html).


