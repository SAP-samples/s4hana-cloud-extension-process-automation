# Create Purchase Order Approval Form.

1. Go back to startprocess tab, and choose **+** after the trigger. 

    ![](./images/startprocesstab.png)

2. Choose Approval

    ![](./images/choose_approval.png)

3. Choose **Blank Approval**.

    ![](./images/choose_blank_approval.png)

4. In **Create Approval** Popup
    1. Enter **Name** as **ApprovePurchase**.
    2. Choose **Based on a form**.
    3. Choose the created form name from dropdown

        ![](./images/approval_popup.png)

5. In **Approval**, choose **Open Editor**.

    ![](./images/open_editor.png)

6. Choose **Text** from the layout. in the text, Enter **Status with Comment**.
7. In the Configuration, choose **Required**.
8. Save the Approval.

    ![](./images/text.png) 


9. Click on ApprovePurchase, and choose **General** tab
    
    ![](./images/approver_purchase.png) 

    1. In the **Subject**, enter 'Approve Purchase Order', and choose the purchase order from purchaseform.
    2. Under the **Recipients** -> **Users**, choose **Process Started By** from Process Metadata.

        ![](./images/general.png) 

10. In Approval, choose **Inputs** tab.
    1. In **Purchase Order**, choose **purchase order** from the form .
    2. Choose **Save**

    ![](./images/input.png) 

## You have now completed the development of Approvals.

## Next: [Add CAP Nodejs Action inside SPA](../action/README.md)


