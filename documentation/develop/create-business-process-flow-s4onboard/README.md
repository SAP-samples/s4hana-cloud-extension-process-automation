# Configure Business Process for Supplier Approval in SAP S/4HANA

This Processes will automate the onboarding of supplier created from supplier request form in SAP S/4HANA.

1. Open **SAP Build Lobby**.

2. Click on **Create** from the *Create* dropdown.

    ![project](./images/new-create.png)

3. In the Create Project dialog box, under **Objective**, choose an **Automated Process** and click on **Next**.

    ![project](./images/[new]process.png)

4. Under **Type**, select the development configuration as **Process**, and click on **Next**.

    ![project](./images/[new]process1.png)

5. Under **Name** tab, do the following:

   - In the **Name** field, enter **Supplier Approval and Creation in SAP S/4HANA**.
   - In the **Description**, enter **Supplier Approval in SAP S/4HANA**.
   - Click on **Review**.

        ![project](./images/new-processname.png)

6. In the **Summary** page, review the *Objective, Type and name* given in the previous steps and click on **Create**.

    ![project](./images/new-review.png)

7. The Create Process wizard appears.

## 2. Create a business process

1. A new tabs opens with the newly created project.

2. In the **Create Process** dialog box, provide the following:

   - In the **Name** field, enter **Supplier Approval**. The value in the **Identifier** field will be automatically filled in. 
   - In the **Description** field, enter **Supplier Approval Process**.
   - Choose **Create**.
   
        ![spa business create](./images/process_create_dialog.png)

        You will be navigated to the main screen and you will have one default module called ***TRIGGER***.

        ![spa business process main](./images/trigger_step.png)
   
3. Choose the Settings icon.

4. Choose **Environment Variables**.

    - Choose **+ Create**
      ![spa business create](./images/process_trigger_env_create.png)
    - In the **Identifier** field, enter **bupa**.
    - In the **Type** dropdown menu, choose **Destination**.
    - Choose **Create**.

        ![spa business create](./images/process_trigger_env.png)

## 3. Create Decisions

To configure the approver, you have to create a decision called **Central Block Rule** in SAP Build. To do that, follow the steps at
[Step-By-Step Guidance to Create Decisions](../create-decisions/README.md).

## 4. Create Supplier Request Form

This request form will serve as a trigger form to enter all relevant details of supplier to starts it's onboarding process.

1. In the **Overview** of Supplier Approval and Creation in SAP S/4HANA, choose **Create**.

2. Choose **Form**.

    ![spa create](./images/spa-supp-req-form.png)

3. In the **Create Form** wizard fields, enter the following parameter. 

    - In the **Name** field, enter **Supplier Request Form**.
    - In the **Description** field, enter **Supplier Request Form**.

4. Choose **Create**.

   ![spa business create](./images/spa-supp-req-form-entry.png)

5. You will now design the **Supplier Request Form** with available layout and input fields options. First, drag-and-drop the form layout fields and enter the given names and field settings as below:

    | **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Headline 1(H1)     | Request Form for Supplier Validation  | 

6. Now, add **Inputs** Fields, enter the labels and select the **Required** checkbox.

     **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Text     | Supplier Name  | 
    | Text     | Street  | 
    | Text     | City  | 
    | Text     | Postal Code  | 
    | Dropdown | Country | 

    ![spa business create](./images/spa-supp-req-form-supplier.png)

7. In the **Country** fields, enter the below value in dropdown.
    - **IN** 
    - **DE** 
    - **US**    

    ![spa business create](./images/request_form.png)

8. Choose **Save**.

## 5. Create Supplier Approval

The supplier approval form will be used to get faster and easier approvals from the business users, to take informed decisions, and get rid of sending emails. These approval forms could be about approving or rejecting newly reqeuested supplier. The forms are then converted into tasks in an automated workflow which will appear in the **My Inbox** of the user.

1. In the **Overview** of Supplier Approval and Creation in SAP S/4HANA, choose **Create**.

2. Choose **Approval**.

    ![spa create](./images/spa-suplier-Approval-form.png)

3. In the **Create Approval** wizard fields, enter the following parameter. 

    - In the **Name** field, enter **Supplier Approval Form**.
    - In the **Description** field, enter **Supplier Approval**.
    - Choose **Based on a Form** checkbox.
    - In the dropdpwn, choose **Supplier Request Form**.

4. Choose **Create**. You will be navigated to approval where you can see all the inputs which is picked up from request form.

    ![spa create](./images/spa-suplier-Approval-entry.png)

5. You will now design the **Supplier Approval Form** with available layout and input fields options. First, drag-and-drop the form layout fields and enter the given names and field settings as below:

    | **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Paragraph  | Post acceptance, new supplier will be created in SAP S/4HANA System and Verification process will be triggered  | 

    ![spa create](./images/spa-suplier-approval-para.png)

6. Choose **Save**.

## 6. Create Supplier Confirmation Form

After the user approves or rejects the request, the next step is to create notifications. These notifications will inform the requester whether their supplier is added in SAP S/4HANA, and will be sent either via an email or through the form. They will appear in the **My inbox** of the requester as a task.

1. Choose **Create**.

2. Choose **Form**

    ![spa confirm](./images/spa-supp-conf-form.png)

3. In the **Create Form** wizard fields, enter the following parameter. 

    - In the **Name** field, enter **Supplier Confirmation**.
    - In the **Description** field, enter **Supplier Notification**.

4. Choose **Create**.

    ![spa confirm](./images/spa-supp-conf-entry.png)

5. You will now design the **Supplier Confirmation Form** with available layout and input fields options. First, drag-and-drop the form layout fields and enter the given names and field settings as below:

    | **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Headline 1(H1)  | Your SAP S/4HANA has recorded new supplier with below details  | 

6. Now, add **Inputs** Fields, enter the labels and select the **Read Only** checkbox.

     **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Text     | Supplier  | 
    | Text     | Supplier Name  | 
    | Text     | Street  | 
    | Text     | City  | 
    | Text     | Postal Code  |
    | Text     | Country  | 
    | Checkbox | Central Block  | 
    | Checkbox | Payment Block  | 
    | Checkbox | Purchase Block  | 
    | Paragraph | Please Click "SUBMIT" for Acknowledgement  | 

    ![spa confirm](./images/spa-supp-conf-form-final1.png)

7. Choose **Save**.

## 7. Create Process

A process condition routes the business process based on certain criteria. These conditions apply an If or Else rule to the process content and respond according to the rules defined as settings in the process builder.

1. In the **Artifacts** of Supplier Approval for SAP S/4HANA, choose **Supplier Approval** process.

    ![spa process](./images/spa-process-overview.png)

2. In the **Trigger** module, click on **Add a Trigger**. Then, choose **Submit a Form** and choose **Supplier Request Form**.

    ![spa process](./images/start_a_process.png)
    ![spa process](./images/select_supplier_request_form.png)

3. In branch of the **Trigger** module, choose **+**. Then, choose **Decision** and choose **Central Block Rule**.

    ![spa process](./images/select_decision.png)
    ![spa process](./images/select_block_rule.png)

4. In the **Central Block Rule** decision form, Choose **Inputs** tab and bind the below items.

    - Select **Single Properties**.
    - In the **Country** field, choose **Country** from **Supplier Request Form (Trigger)**.

    ![spa process](./images/select_rule_input.png)

5. In branch of the **Decision** module, choose **+**. Then, choose **Approval** > **Supplier Approval**.

    ![spa process](./images/choose_plus.png)
    ![spa process](./images/select_approval.png)
    ![spa process](./images/select_supplier_approval.png)

6. In the **Supplier Approval** approval form, Under **Reject** side choose **+** icon. And choose **Controls and Events**. Under **Flow logic** choose **End**.

    ![spa process](./images/control_end.png)
    ![spa process](./images/control_end1.png)

7. In the **Supplier Approval** form, Choose **General** tab and bind the below items.

    - In the **Subject** field, enter **Review for Supplier** and choose **Supplier Name** from **Supplier Request Form(Trigger)**.
    - In the **Priority** field, choose **Medium**.
    - In the **Users** field, choose **ApproverEmail** from **Central Block Rule** of **Process Content**.

        ![spa process](./images/supplier_approval_general.png)

8. In the **Supplier Approval** approval form, Choose **Inputs** tab and bind the below items.

    - In the **Supplier Name** field, choose **Supplier name** from **Supplier Request Form (Trigger)**.
    - In the **City** field, choose **City** from **Supplier Request Form (Trigger)**.
    - In the **Country** field, choose **Country** from **Supplier Request Form (Trigger)**.
    - In the **Postal Code** field, choose **Postal Code** from **Supplier Request Form (Trigger)**.
    - In the **Street** field, choose **Street** from **Supplier Request Form (Trigger)**.

        ![spa process](./images/supplier_input.png)

9. In branch of the **Approve** of **Supplier Approval Form** module, choose **+**. Then, choose **Actions** >  **Browse All Actions**.

    ![spa process](./images/select_action.png)

    ![spa process](./images/browse.png)

11. In the **Projects** field, enter **businesspartner**.
        - Choose **Show Filters** to see the **Projects** field
    
    ![spa process](./images/show_filter.png)

13. Choose actions **Create a new business partner record** and choose **Add**.

    ![spa process](./images/create_new_add.png)

14. In the action **Create a new business partner record** ,choose **General**.

    - In the **Destination Variable** field, choose **bupa**.

      ![spa process](./images/link_bupa.png)

15. In the action **Create a new business partner record** ,choose **Inputs** and bind the below items.

    - In the **BusinessPartnerIsBlocked** field, choose **Central Block** from **Central Block Rule** of **Process Content**.
    - In the **OrganizationBPName1** field, choose **Supplier Name** from **Supplier Request Form (Trigger)** of **Process Content**.
    - Choose **Single Properties** for **to_BusinessPartnerAddress** and select **Single item** under results.
    - In the **City** field, choose **City** from **Supplier Request Form (Trigger)** of **Process Content**.
    - In the **Country** field, choose **Country** from **Supplier Request Form (Trigger)** of **Process Content**.
    - In the **PostalCode** field, choose **Postal Code** from **Supplier Request Form (Trigger)** of **Process Content**.
    - In the **Street** field, choose **Street** from **Supplier Request Form (Trigger)** of **Process Content**.

        ![spa process](./images/inputs_create_new.png)

    - Choose **Single Properties** for **to_BusinessPartnerRole** and select **Single item** under results.
    - In the **BP Role** field, choose **SupplierRole** from **Central Block Rule** of **Process Content**.

        ![spa process](./images/inputs_create_new1.png)

16. In branch of the action **Create a new business partner record** module, choose **+**. Then, choose **Action** which opens **Browse library** and choose **Add** for **Update Supplier General Data** action.

    ![spa process](./images/spa-process-action-lib-supplier-patch.png)
 
17. In the action **Update Supplier General Data**, choose **General**.
    - In the **Destination Variable** field, choose **bupa**.

        ![spa process](./images/link_bupa1.png)

18. In the action **Update Supplier General Data**, choose **Input**.
    - In the **Supplier** field, choose **BusinessPartner** of actions **create a new business partner record**.
    - In the **PaymentBlockedForSupplier**, choose **BusinessPartnerIsBlocked** from **Central Block Rule**
    - In the **PurchasingIsBlocked**, choose **BusinessPartnerIsBlocked** from **Central Block Rule**

    > In updated api spec, updated name of PaymentBlockedForSupplier is **Payment block**, PurchasingIsBlocked is **Purch. Block** and BusinessPartnerIsBlocked is **Central Block**

    ![spa process](./images/Inputs_update.png)

19. In the action **Update Supplier General Data** module, choose **+** sign > **Form** > **Supplier Confirmation**.

    ![spa process](./images/updates_add_form.png)

20. In the form **Supplier Confirmation** module ,choose **General** and bind the below items.

    - In the **Subject** box:
        - enter **New Supplier**
        - Choose **BusinessPartner** from actions **create a new business partner record**
        - enter **added in S/4HANA**
        > Please type the above text in the processes as copy-paste might throw error.
    - In the **Priority** field, choose **Medium**.
    - In the **Users** field, choose **ApproverEmail** from **Central Block Rule**.

        ![spa process](./images/supplier_confirmation.png)

21. In the form **Supplier Confirmation** module ,choose **Inputs** and bind the below items.

    - In the **Central Block** field, choose **BusinessPartnerIsBlocked** of actions **create a new business partner record**.
      > just to note that in updated api specification BusinessPartnerIsBlocked is renamed as **CentralBlock**.
    - In the **City** field, choose **City** from **Supplier Request Form (Trigger)**.
    - In the **Country**, choose **Country** from **Supplier Request Form (Trigger)**.
    - In the **Payment Block**, choose **BusinessPartnerIsBlocked** of actions **create a new business partner record**.
    - In the **Postal Code** field, choose **Postal Code** from **Supplier Request Form (Trigger)**.
    - In the **Purchase Block** field, choose **BusinessPartnerIsBlocked** of actions **create a new business partner record**.

        ![spa process](./images/supplier_inputs.png)

    - In the **Street** field, choose **Street** from **Supplier Request Form (Trigger)**.
    - In the **Supplier** field, choose **BusinessPartner** from Actions **create a new business partner record**.
    - In the **Supplier Name** field, choose **Supplier Name** from **Supplier Request Form (Trigger)**.

        ![spa process](./images/supplier_inputs1.png)

22. Below is the final layout of editor.
        ![spa process](./images/final_output.png)

23. Choose **Save**.

## 8.Release Business Process

To run the process you have to first release and then deploy the business process project. Releasing a project creates a version or snapshot of the changes and deploying the project makes it available in runtime to be consumed. You can only deploy a released version of the project, and at a given time there can be multiple deployed versions of the same project.

1. Choose **Release**.

   - For new release, choose **Release** leaving the **Version Number** unchanged.

        ![spa new release](./images/spa-new-release.png)

   - For releasing it from second time and so on.., do the following:

     1. In the **Version**, choose **Contains only Patches**.

     2. Choose **Release**.
   
        ![spa business create](./images/spa-release-patches.png)

## 9. Deploy Business Process

1. Choose **Deploy**.

2. Choose **Public** and click on **Deploy**.

    ![spa process](./images/choose_environment.png)

2. In the **Define Variables** dialog box, do the following:

    - Choose **Set new value**
    - In the **Destination** dropdown, choose **bupa**.
    - Choose **Deploy**.

        ![spa process](./images/bupa_deploy.png)


















