# Set Up the SAP S/4HANA System

In this section, you will learn how to activate an OData API service in an SAP S/4HANA system, create a user, and assign the necessary roles and authorization objects.

You need to be an SAP S/4HANA administrator to be able to follow the steps.

> The following screenshots are done with SAP GUI 7.50 - by using SAP GUI 7.60 the usage could differ, for example tick button instead of a continue button and so on.

## Activate the OData Service

1. Log in to the SAP S/4HANA system using SAP GUI with your administrator user.

2. Call the **/n/IWFND/MAINT\_SERVICE** transaction.

3. Choose **Add Service**.

   ![Add Service](./images/add-service.png)

4. In the **Add Selected Serviced** screen, enter the following values:
   - **System Alias** = LOCAL
   - **Technical Service Name** = API\_BU*
   - Choose **Enter** - you should see the API\_BUSINESS\_PARTNER in the list.

   ![Add selected Service](./images/add-selected-service.png)

5. Select the **API\_BUSINESS\_PARTNER** checkbox and choose **Add Selected Service**.

   ![Add selected Service](./images/add-selected-service2.png)

6. The **Add Service** screen appears.
   - Specify **Package Assignment**, for example $TMP by clicking Local Object.
   - Select the **Enable OAuth for Service** checkbox.
   - Choose **Continue** to activate the changes.
   - Choose **Continue** to confirm the message box.

   ![Add service](./images/add-service2.png)

**Result:** The API\_BUSINESS\_PARTNER is now activated.

7. Repeat steps 2 to 6 again to activate **API_CV_ATTACHMENT_SRV**.

## Create User and Assign Roles and Authorization Objects

### **A: Create a User**
In this section, we'll create a new user in the SAP S/4HANA system and assign the SAP\_BR\_BUPA\_MASTER\_SPECIALIST role to it.

1. Call the SU01 transaction:
   1. Enter a user ID.
   2. Choose **Create**.

    ![Create User](./images/CreateUserS4.png)

2.  Follow these steps:
    1.  Choose the **Address** tab.
    2.  Specify the **Last name** field.
    3.  Enter a valid e-mail address.

        ***Important:** this email is the principal for the SSO communication that we'll configure in a later section.*

    4. Choose the **Logon Data** tab.

    ![Set Address](./images/MaintainUser1.png)

3. In the **Logon Data** tab:
    1. From the **User Type** dropdown menu, select **System**.
    2. Set a password.
    3. Repeat the password.
    4. Choose the **Roles** tab.

    ![Set Password](./images/MaintainUser2.png)

4. In the **Roles** tab, select the first empty row in the **Roles** list and choose **Add Roles**.

   ![Add Role](./images/add-role.png)

5. Find a role.

   1. In the **Single Role** field, enter **SAP\_BR\_BUPA\***.
   2. Press Enter.

    ![Search Role](./images/SAP-BR-BUPA.png)

6. Select a role.

   1. Select the **SAP\_BR\_BUPA\_MASTER Specialist** role.
   2. Choose enter/copy.

       ***Hint:** This role is necessary to get access to the Business Partner data and the Business Partner Fiori application*

   ![add BUPA Master Specialist](./images/add-SAP-BR-BUPA.png)

7. Choose **Save**.

   ![Save User](./images/save-user.png)



###  **B: Create an Authorization Object for the OData Service**
In this section, we generate a custom authorization object, which is necessary to give the user access to the Gateway and to the Business Partner OData service.

1. Call the PFCG transaction:
   1. In the **Role** field, enter a new role name.
   2. Choose **Single Role**.

   ![PFCG](./images/role-maintainance1.png)

2. Set the authorizations:
   1. Choose **Save**.
   2. Select the **Authorization** tab.
   3. Choose the **Change Authorization Data** icon.

   ![Authorization](./images/RoleAutha.png)

3.  Choose a template:

    1.  Select the **Template for Gateway users (/IWFND/RT\_GW\_USER)**.
    2.  Choose **Apply Template** and then choose **Save**.


    ![Apply Template](./images/choose_template.png)

4. Choose **Status** and then **Execute** to assign the authorization.

    ![Assign Authorization](./images/Assign-Authorization.png)

5. Choose **Generate** (Shift+F5).
   ![Assign Authorization](./images/Assign-Authorization2.png)

6. In the **Menu** tab, choose **Transaction** > **Authorization Default**.

   ![Menu](./images/Authorization_default.png)

7. Set the service:
   1. In the **Authorization Default** field, select **TADIR Service**. For SAP S/4HANA version 2020, select **IWSG SAP Gateway: Service Groups Metadata** and skip step 2.
   2. In the **Object Type** field, select **IWSG SAP Gateway: Service Groups Metadata**.
   3. Open the Object list.

   ![Object Type](./images/tadir1.png)

8. Object list:

   1. Select the **ZAPI\_BUSINESS\_PARTNER\_0001** object.
   2. Choose **Confirm**.

   ![Object List](./images/object2.png)

9.  Copy the **TADIR** service to the menu and choose **Save**.

      ![Object](./images/copy-object.png)

10. Set up the user:
    1.  Save the Authorization Object
    2.  Select the User tabulator
    3.  Enter or select the user ID you have created in section A
    4.  Choose **User Comparison**

    ![User Comparison](./images/user-comparison.png)

11. Complete Comparison

    ![User Comparisons](./images/complete-comparison.png)

12. Choose Save and you have finished the setup of the user profile.


***Hint:** If the Authentication tabulator turns to red, select this tabulator, and select again **Change Authorization Data** - click again on Generate (Shift+F5) - Choose **Save.***

### Test the API\_BUSINESS\_PARTNER\_SRV

To see if the setup was done correctly, call the Business Partner API with the new user.

* Call Transaction /N/IWFND/MAINT\_SERVICE
    1. Double-click on ZAPI\_BUSINESS\_PARTNER
    2. Choose **Call Browser**


    ![Test Bupa](./images/test-bupa1.png)

    Hint: If you use a CAL system, kindly check and use the relevant IP address instead of the default system host name as the host name has to be resolvable by the browser.

* Enter the credentials of the user that we have created. You should then see the structure of the BusinessPartner OData service.

    ![Test Bupa](./images/test-bupa2.png)

*  Change the end to the URL to ..../sap/API\_BUSINESS\_PARTNER/A\_BusinessPartner/?$format=xml. You should now see a list of Business Partners.

This completes this mission section.



## Summary

You have activated an API in the SAP S/4HANA on-premise system and created a user with the necessary roles for CRUD operations of Business Partner data and to access the API\_BUSINESS\_PARTNER\_SRV OData service.

***Hint:** The simplest way for adding additional users with the same roles is just to copy this user profile in the SU01 transaction*.

See section [Activate and Maintain Services](https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/202009.002/en-US/bb2bfe50645c741ae10000000a423f68.html) on SAP Help Portal for more details.
