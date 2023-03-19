# Configure Actions

Action is one of the feature in SAP Process Automation. Action is a mean to connect processes with external systems, be it SAP or non-SAP systems. This is an important piece of the puzzle especially if you want to automate or extend your business processes for any available line of business like SAP S/4HANA, SAP Ariba, SAP SuccessFactors and many more. These extensions can be easily build using SAP Process Automation, and using Actions you can connect to any SAP System and can do any kind of operation like GET, POST, PATCH and other calls.

## 1. Download API Specification for API_BUSINESS_PARTNER.

1. Login to [SAP API Business Hub](https://api.sap.com). Find the [Business Partner (A2X)](https://api.sap.com/api/API_BUSINESS_PARTNER/overview) API for SAP S/4HANA.

2. Choose **API Specification** and download the JSON file.

![action create](./images/action_api_hub.png).

## 2. Add BTP Destination in SAP Build

1. Navigate to **Settings** tab.

2. Choose **Destinations**.

3. Choose **New Destination**.

4. Choose **bupa**.

5. Choose **Add**.

![action create](./images/action-add-destination.png)

## 3. Create Action Project

1. Open SAP Build and choose **Lobby**. Then, choose **Create**.

    ![action create](./images/action_create_lobby.png)

2. In the popup, choose **Build an Automated Process**.

    ![action create](./images/action_create_build.png)

3. Choose **Actions**.

    ![action create](./images/action_create_action.png)

4. In the popup, do the following:

    - In the **Project Name** field, enter **businesspartner**.
    - In the **Short Decription** field, enter **API to create supplier in S/4HANA system**.
    - In the **Upload API Specification** field, browse for the json file you downloaded from SAP API Business Hub.
    - Choose **Create**

    ![action create](./images/action_businesspartner.png)

    Once the action project is created, the action editor will automatically open. 

5. In the **Actions Type** dropdown, choose **GET**, **POST** and **PATCH**.

    ![action create](./images/action_create_action-filter.png)

6. In the Action **Business Partner**, choose below actions.

    | **Method**    |  **Action**    | **Description** |
    | ----------- | ----------- | -----------    |
    | **GET**  | **/A_BusinessPartner** | **Retrieves business partner general data** |
    | **POST**     | **/A_BusinessPartner**  | **Create a new business partner record.** |
    
    ![action create](./images/action-post.png)

    ![action create](./images/action-get.png)

7. In the Action **Supplier**, choose below actions.

    | **Method**    |  **Action**    | **Description** |
    | ----------- | ----------- | -----------    |
    | **PATCH**     | **/A_Supplier('{Supplier}')**  | **Updates supplier general data.** |

    ![action create](./images/action-patch.png)

8. Choose **Add**

9. Now, you will update the input/output fields of the action project **Creates a new business partner record** to keep only the mandatory fields that are needed to **create** the supplier. To select the Input fields, do the following:

    - Sort Key in ascending order by clicking on the key column and select the Sort Ascending option.

      ![action create](./images/action-sort-asc.png)

    - Select All the fields by clicking on the checkbox of Key column.

    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | ----------- | 
        | **BusinessPartnerCategory** |
        | **BusinessPartnerIsBlocked** |
        | **OrganizationBPName1**     | 
        | **to_BusinessPartnerRole**  | 
        | **to_BusinessPartnerAddress** |

    - Click cross to delete rest of the unwanted fields.

      ![action create](./images/action-cancel.png)

    - In the confirmation popup, click Remove.
    
      ![action create](./images/action-remove.png)

10. Repeat the previous steps to remove the unwanted field in **to_BusinessPartnerAddress**

    - Select All the fields **to_BusinessPartnerAddress** by clicking on the checkbox of Key column.
    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | ----------- | 
        | **Country**     | 
        | **CityName**  | 
        | **PostalCode** |
        | **StreetName** |
        | **Language** |

        ![action create](./images/action-bp-address-cancel.png)
        
11. Repeat the previous steps to remove the unwanted field in **to_BusinessPartnerRole**

    - Select All the fields **to_BusinessPartnerRole** by clicking on the checkbox of Key column.
    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | ----------- | 
        | **BusinessPartnerRole**     | 

        ![action create](./images/to_role.png)        

12. Choose **BusinessPartnerCategory**.
    - In the **Static** field, choose **YES**.
    - In the **Value** field, enter **2**.

    ![action create](./images/action_create_post_newbp_category_static.png)

13. Choose **Language**.
    - In the **Static** field, choose **YES**.
    - In the **Value** field, enter **en**.

    ![action create](./images/action_create_post_newbp_lang_static.png)
    
14. Choose **Save**.

15. Your final actions **Creates a new business partner record** will look like below.

    ![action create](./images/action-post-final.png)

16.  Now, you will update the input/output fields of the  to keep only the mandatory fields that are needed to **update** the supplier. To select the Input fields, do the following:

17. Select All the fields by clicking on the checkbox of Key column.

    - Uncheck the following fields so that they are added as Input.

        | **Keys selected as Input** | 
        | -------------------------- | 
        | **PurchasingIsBlocked**    |
        | **PaymentIsBlockedForSupplier** |
        

    ![action create](./images/action-patch-cancel.png)

18. Your final actions **Updates supplier general data** will look like below.

    ![action create](./images/action-patch-final.png)

19. Choose **Save**
        
## 4. Update X-CSRF of Post Actions

1. Choose actions **POST Creates a new business partner record.**.

    - Choose three dots icon and choose **Enable X-CSRF**.

        ![action create](./images/action-enable-xsrf.png)

    - In the **Token Fetch End Point** field, enter **/**

    - Choose **Enable**

        ![action create](./images/action-enable-csrf-slash.png)

2. Repeat the same steps for actions **PATCH Updates supplier general data**.

## 5. Release the actions project

You will now release the action project to create version(s) and then publish a selected version in the action repository. It is then these published actions that can be used in different processes and applications to connect to external systems.

1. Choose **Release** to release a version of the action project.

2. In the release popup, enter the  **Release Notes** of your choice, choose **Release**.

    ![action create](./images/actions_release_main.png)

## 6. Publish action project 

Once the action project is released, you can the publish any release version of the action by clicking **Publish to Library** from top-right corner.

1. Choose **Publish to Library**.

2. Choose **Publish**.

![action create](./images/actions_publish.png)

## 7. Test Actions Project with Destination in SAP BTP

1. Choose the  **Retrieves business partner general data** action.

2. Choose the **Test** tab.

3. In the **Host** field, choose **Destination**.

4. In the **Destination** dropwdown menu, choose **bupa**.

5. In **Test Input Values**, choose **$top** field and enter any values from **1** to **5**.

6. Choose **Test**.

    In the **Response Preview** section, you should see status **200 OK**.
    
    ![action create](./images/action_test.png)

 












