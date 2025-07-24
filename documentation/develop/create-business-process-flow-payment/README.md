# Configure Business Process for **Supplier Payment and Purchase Unblocking in SAP S/4HANA**

This process will unblock the supplier onboarded in SAP S/4HANA to make payments and purchases.

## 1. Create a Business Process Project in SAP Build

1. Open **SAP Build Lobby**.

2. Click on **Create** from the *Create* dropdown.

    ![project](./images/new-create.png)

3. In the Create Project dialog box, under **Objective**, choose an **Automated Process** and click on **Next**.

    ![project](./images/[new]process.png)

4. Under **Type**, select the development configuration as **Process**, and click on **Next**.

    ![project](./images/[new]process1.png)

5. Under **Name** tab, do the following:

   - In the **Name** field, enter **Supplier Payment and Purchase Unblocking**.
   - In the **Description**, enter **Supplier Payment and Purchase Unblocking**.
   - Click on **Review**.

        ![project](./images/new-processname.png)

6. In the **Summary** page, review the *Objective, Type and name* given in the previous steps and click on **Create**.

    ![project](./images/new-review.png)

7. The Create Process wizard appears.

## 2. Create a business process

1. A new tabs opens with the newly created project.

2. In the **Create Process** dialog box, provide the following:

   - In the **Name** field, enter **SupplierPaymentUnblock**. The value in the **Identifier** field will be automatically filled in. 
   - In the **Description** field, enter **Supplier Payment Unblock**.
   - Choose **Create**.
   
      ![spa business create](./images/create_process.png)

      You will be navigated to the main screen and you will have one default module called ***TRIGGER***.

      ![spa business process main](./images/trigger_start.png)

3. Choose the Settings icon.

4. Choose **Environment Variables**.
    - Choose **+Create**.
    ![spa business create](./images/process_trigger_env_create.png)
    - In the **Identifier** field, enter **bupa**.
    - In the **Type** dropdown menu, select **Destination**.
    - Choose **Create**.

      ![spa business create](./images/create_env.png)

5. In the **Process Details** section, choose **Variables** tab.
    ![spa business create](./images/process_details.png)                                                                                              

6. Choose **Configure** for **Process Inputs**.

   ![spa business create](./images/process_input.png)
   
7. Choose **Add Input**.
    - In the **Name** field, enter **supplier**. The value in the **Identifier** field will be automatically filled in. 
    - In the **Type** dropdown menu, select **String**. 
    - Select the **Required** checkbox.
    
   -  Repeat the previous step to add the following properties:
      | **Name**    |  **Type**    | **Required** |
      | ----------- | ----------- | -----------    |
      | suppliername     | String  | Yes |
      | purchaseisblock  | Boolean | Yes |
      | paymentisblock   | Boolean | Yes |
      |  country         | String  | Yes |

   - Choose **Apply**.
      ![spa business create](./images/configure_inputs.png)

## 3. Create Decisions

To configure the approver, you have to create a decision called **Central Block Rule** in SAP Build. To do that, follow the steps at
[Step-By-Step Guidance to Create Decisions](../create-decisions/README.md).

## 4. Create Approval

Once the supplier has been verified by the BusinessParnerValidation application, the approver gets notified about the supplier's change in the status and approves the supplier request to make payments and purchases in SAP S/4HANA.

1. In the **Overview** of **Supplier Payment and Purchase Unblocking** project, choose **Create**.

2. Choose **Approval**.

   ![spa business create](./images/approval_select.png)

3. In the pop-up window for **Create Approval**:

   - In the **Name** field, enter **SupplierPaymentApproval**.
   - In the **Description** field, enter **Approval for Supplier Payment Unblock**.
   - Choose **Create**.

      ![spa business create](./images/create_approval.png)

4. You will now design the **SupplierPaymentApproval** with available layout and input fields options. First, drag-and-drop the form layout fields and enter the given names and field settings as below:

    | **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Headline 1(H1)     | Enable Payment and Purchases to Supplier  | 

5. Now, add **Inputs** Fields, enter the labels and select the **Read Only** checkbox.

     **Form Fields** |  **Field Settings with Label**    | 
    | ----------- | ----------- | 
    | Text     | Supplier ID  | 
    | Text     | Supplier Name  | 
    | Paragraph     | The Supplier has passed the Background Verification. Please approve that the supplier is now able to do payment and purchases  | 

6. Choose **Save**.

   ![spa business create](./images/approval_form.png)

## 5. Create Process

1. From the Overview, go to process **SupplierPaymentUnblock** created earlier. In the **Trigger** module, choose **Add a Trigger**.
   ![spa business create](./images/add_a_trigger.png)
   
3. Choose **API Trigger**.
   ![spa business create](./images/trigger_api.png)
   
4. In the **Create API Trigger** wizard, configure the following properties:
    - In the **Name** field, enter **supplierAPI**.
    - In the **Description** field, enter **Supplier Trigger API**.
    - Choose **Create**
      ![spa business create](./images/create_trigger.png)

5. In branch of the **Trigger** module, 
   - Choose **+**
   - Choose **Decision**
      ![spa business create](./images/select_decision.png)
   - Choose **Central Block Rule**
      ![spa business create](./images/select_rule_decision.png)

6. In the **Central Block Rule** decision, Choose **Inputs** tab and bind the below items.
   - Select **Single Properties**.
   - In the country field, choose **country** from **Process Inputs**.
   ![spa business create](./images/map_process_inputs.png)
   
7. Choose **+** sign in decision branch after **Central Block Rule**.

8. Choose **Approval**, and under Available Approvals, select **SupplierPaymentApproval**.

   ![spa business create](./images/approval_selection.png)
   ![spa business create](./images/supplier_approval_selection.png)
   
9. In the Supplier Approval approval form, Under Reject side choose **+** icon. And choose **Controls and Events**.
   ![spa business create](./images/controls_event.png)

10. Under **Flow logic** choose End.

   ![spa business create](./images/end.png)

11. In the **SupplierPaymentApproval** approval, choose **General** tab and Bind the below items.

      - In the **Subject** field, enter **Enable Payment and Purchase to Supplier** and click **suppliername** from **Process Inputs**
      - In the **Priority** field, choose **Medium**.
      - In the **Users** field, choose **ApproverEmail** from **Central Block Rule**.

         ![spa business create](./images/process-approval-general.png)
   
12. In the **SupplierPaymentApproval** approval, choose **Input** tab and Bind the below items.

      - In the **Supplier ID** field, choose **supplier** from **Process Inputs**.
      - In the **Supplier Name** field, choose **suppliername** from **Process Inputs**.

         ![spa business create](./images/process-approval-input.png)
   
13. In the **SupplierPaymentApproval** approval, choose **+** from **Approve** branch side.

14. Choose **Action** > Choose **Browse All Actions**.

      ![spa business create](./images/action_selection.png)
      ![spa business create](./images/browse.png)
   
15. In the **Projects** field, enter **businesspartner**. > Choose **Show Filters** to see the **Projects field**
      
      ![spa business create](./images/show_filter.png)

16. choose Actions **Updates supplier general data** and choose **Add**.

      ![spa business create](./images/browse_lib.png)
   
17. In the actions **Updates supplier general data**, choose **General** tab. 

18. In the **Destination Variable** field, choose **bupa** .

      ![spa business create](./images/select_dest.png)

19. Choose **Inputs** tab, select **Single Properties**.

      - In the **PaymentBlockedForSupplier** field, choose **paymentIsBlock** from **Process Inputs**.
      - In the **PurchasingIsBlocked** field, choose **purchaseIsBlock** from **Process Inputs**.
      > In updated api spec, updated name of PaymentBlockedForSupplier is Payment block, PurchasingIsBlocked is Purch. Block

20. In the **Supplier** field, choose **supplier** from **Process Inputs**.

21. Choose **Save**.

      ![spa business create](./images/process_action_paym.png)

22. Your final Process look like below.

      ![spa business create](./images/final_flow.png)

## 6. Release the Process
   
1. Choose **Release**

   - For new release, choose **Release** leaving the **Version Number** unchanged.

      ![spa new release](./images/spa-new-release.png)

   - For releasing it from second time and so on.., do the following:

     1. In the **Version**, choose **Contains only Patches**.

     2. Choose **Release**.
   
      ![spa business create](./images/process_release.png)

## 7. Deploy the Process   

1. Select the **Released version** > Choose **Deploy**.

   ![spa business create](./images/released_version.png)

3. Choose **Public** and click on **Deploy**.

    ![spa process](./images/choose_environment.png)

4. In **Effect on Triggers** pop-up, click on **Deploy**.

5. In the **Define Variables** dialog box, do the following:

    - Choose **Set new value**
    - In the **Destination** dropdown, choose **bupa**.
    - Choose **Deploy**.

        ![spa process](./images/bupa_deploy.png)




`








