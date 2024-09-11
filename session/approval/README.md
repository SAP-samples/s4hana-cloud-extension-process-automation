# Create Purchase Order Approval Form.

1. Choose **+** after the trigger -> purchaseform, and then choose **Approval**.

![](./images/choose_plus.png)
![](./images/choose_approval.png)

2. Choose **Blank Approval**.

![](./images/choose_blank_approval.png)

3. In **Create Approval** Popup
    1. Enter **Name** as **ApprovePurchase**.
    2. Choose **Based on a form**.
    3. Choose the created form name from dropdown

    ![](./images/enterapproval.png)

4. In **Approval**, choose **Open Editor**.

 ![](./images/open_editor.png)

5. Choose **Text** from the layout. in the text, Enter **Status with Comment**.
6. In the Configuration, choose **Required**.
7. Save the Approval.

 ![](./images/text.png) 


8. Click on ApproverPurchase, and choose **General** tab
    
    ![](./images/approver_purchase.png) 

    1. In the **Subject**, enter 'Approve Purchase Order', and choose the purchase order from purchaseform.
    2. Under the **Recipients** -> **Users**, choose **Process Started By** from Process Metadata.

     ![](./images/general.png) 

9. In Approval, choose **Inputs** tab.
    1. In **Purchase Order**, choose **purchase order** from the form .
    2. Choose **Save**

    ![](./images/input.png) 

## You have now completed the development of Approvals.

## Next: [Add CAP Nodejs Action inside SPA](../action/README.md)


