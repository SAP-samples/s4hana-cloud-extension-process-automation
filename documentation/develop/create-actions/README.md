# Configure Actions

Action is one of the feature in SAP Process Automation. Action is a mean to connect processes with external systems, be it SAP or non-SAP systems. This is an important piece of the puzzle especially if you want to automate or extend your business processes for any available line of business like SAP S/4HANA, SAP Ariba, SAP SuccessFactors and many more. These extensions can be easily build using SAP Process Automation, and using Actions you can connect to any SAP System and can do any kind of operation like GET, POST, PATCH and other calls.

## 1. Add BTP Destination in SAP Build

1. Navigate to **Control Tower** tab on the left panel.

2. Under **Backend Configuration** choose **Destinations**.

    ![action create](./images/destination_tile.png)

3. Choose **Add**.

4. Search for **bupa** & choose **bupa**.
   
5. Choose **Next**.

   ![action create](./images/create_destination.png)

7. Choose **Add Destination**.

    ![action create](./images/create_destination1.png)

## 2. Create Action Project

1. Open SAP Build, navigate to **Actions** under **Connectors** on the left panel. Then, choose **Create**.

    ![action create](./images/create_action1.png)

2. In the popup **Choose an API Source**, choose **SAP Business Accelerator Hub** tile under **API Specification**.

    ![action create](./images/create_action3.png)

3. In the popup **Browse SAP Business Accelerator Hub**, Choose **SAP S/4HANA** > Choose **SAP S/4HANA**

    ![action create](./images/create_action4.png)

4. In the search bar, search for Business Partner, choose **Business Partner (A2X)** tile.

    ![action create](./images/create_action5.png)

5. Choose **Next**.

6. In the Final Step, do the following:

    - In the **Project Name** field, enter **businesspartner**.
    - In the **Short Decription** field, enter **API to create supplier in S/4HANA system**.
    - Choose **Create**

      ![action create](./images/create_action_final.png)

    Once the action project is created, the action editor will automatically open. 

7. In the **Filter Actions** dropdown, choose **GET**, **POST** and **PATCH**.

    ![action create](./images/filter_action_dropdown.png)

8. In the Action **Business Partner**, choose below actions.

    | **Method**    |  **Action**    | **Description** |
    | ----------- | ----------- | -----------    |
    | GET  | /A_BusinessPartner | Retrieves business partner general data |
    | POST     | /A_BusinessPartner  | Create a new business partner record |
    
    ![action create](./images/get_action.png)

    ![action create](./images/post_action.png)

9. In the Action **Supplier**, choose below actions.

    | **Method**    |  **Action**    | **Description** |
    | ----------- | ----------- | -----------    |
    | PATCH     | /A_Supplier('{Supplier}')  | Updates supplier general data. |

    ![action create](./images/patch_action.png)

10. Choose **Add**

11. Now, you will update the input/output fields of the action project **Creates a new business partner record** to keep only the mandatory fields that are needed to **create** the supplier. To select the Input fields, do the following:

    - Sort Key in ascending order by clicking on the key column and select the Sort Ascending option.

      ![action create](./images/action-sort-asc.png)

    - Select All the fields by clicking on the checkbox of Key column.

    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | ----------- | 
        | BusinessPartnerCategory |
        | BusinessPartnerIsBlocked |
        | OrganizationBPName1     | 
        | to_BusinessPartnerRole  | 
        | to_BusinessPartnerAddress |

    - Choose **Remove**.

      ![action create](./images/Remove.png)

    - In the confirmation popup, click Remove.
    
      ![action create](./images/action-remove.png)

12. Repeat the previous steps to remove the unwanted field in **to_BusinessPartnerAddress**

    - Select All the fields **to_BusinessPartnerAddress** by clicking on the checkbox of Key column.
    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | ----------- | 
        | Country   | 
        | CityName  | 
        | PostalCode |
        | StreetName |
        | Language |

        ![action create](./images/remove_bpadress.png)
        
13. Repeat the previous steps to remove the unwanted field in **to_BusinessPartnerRole**

    - Select All the fields **to_BusinessPartnerRole** by clicking on the checkbox of Key column.
    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | ----------- | 
        | BusinessPartnerRole     | 

        ![action create](./images/remove_bprole.png)        

14. Choose **BusinessPartnerCategory**.
    - In the **Static** field, choose **YES**.
    - In the **Value** field, enter **2**.

      ![action create](./images/action_create_post_newbp_category_static.png)

15. Choose **Language**.
    - In the **Static** field, choose **YES**.
    - In the **Value** field, enter **en**.

      ![action create](./images/action_create_post_newbp_lang_static.png)
    
16. Choose **Save**.

17. Your final actions **Creates a new business partner record** will look like below.

    ![action create](./images/action-post-final.png)

18.  Now, you will update the input/output fields of the  to keep only the mandatory fields that are needed to **update** the supplier. To select the Input fields, do the following:

19. Select All the fields by clicking on the checkbox of Key column.

    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | -------------------------- | 
        | PurchasingIsBlocked    |
        | PaymentIsBlockedForSupplier |
        

      ![action create](./images/remove_patch.png)

20. Your final actions **Updates supplier general data** will look like below.

    ![action create](./images/action-patch-final.png)

21. Choose **Save**
        
## 3. Update X-CSRF of Post Actions

1. Choose actions **POST Creates a new business partner record.**.

    - Choose settings icon.
    - Choose **CSRF**.
    - In the **Enable CSRF**, choose **YES**.
    - In the **Token Fetch End Point** field, enter **/**
    - Choose **Save**

        ![action create](./images/csrf.png)

2. Repeat the same steps for actions **PATCH Updates supplier general data**.

## 4. Release the actions project

You will now release the action project to create version(s) and then publish a selected version in the action repository. It is then these published actions that can be used in different processes and applications to connect to external systems.

1. Choose **Release** to release a version of the action project.

2. In the release popup, enter the  **Release Notes** of your choice, choose **Release**.

    ![action create](./images/actions_release_main.png)

## 5. Publish action project 

Once the action project is released, you can the publish any release version of the action by choosing **Publish to Library** .

1. Open SAP Build and choose **Actions** under **Connectors** on the left panel. Then, navigate to your actions **businesspartner**.

2. Click on Versions

3. Choose three dots corresponding to the respective version under the Released section

4. Choose **Publish to Library**

    ![action create](./images/publish.png)

5. Choose **Publish**.

    ![action create](./images/actions_publish_final.png)


## 6. Test Actions Project with Destination in SAP BTP

1. Choose the  **Retrieves business partner general data** action.

2. Choose the **Test** tab.

3. In the **Host** field, choose **Destination**.

4. In the **Destination** dropwdown menu, choose **bupa**.

5. In **Test Input Values**, choose **$top** field and enter any values from **1** to **5**.

6. Choose **Test**.

    In the **Response Preview** section, you should see status **200 OK**.
    
    ![action create](./images/action_test.png)

 












