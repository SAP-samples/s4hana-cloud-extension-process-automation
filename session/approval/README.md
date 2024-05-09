# Create Purchase Order Approval Form.

1. Choose **+** after form, and then choose **Approval**.

![](./images/chooseapproval.png)

2. Choose **Blank Approval**.

![](./images/blank.png)

3. In **Create Approval** Popup
    1. Enter **Name** as **ApprovePurchase**.
    2. Choose **Based on a form**.
    3. Choose the created form name from dropdown

    ![](./images/enterapproval.png)

4. In **Approval**, choose **Open Editor**.

 ![](./images/open.png)

5. Choose **Text** from the layout. in the text, Enter **Status with Comment**.
6. In the Configuration, choose **Required**.
7. Save the Approval.

 ![](./images/text.png) 


8. In Approval, choose **General** tab
    1. In the **Subject**, enter **Approve Purchase Order**, choose the purchase order from purchaseform.
    2. Under the **Recipients** -> **Users**, choose **Process Started By** from Process Metadata.

     ![](./images/general.png) 

9. In Approval, choose **Input** tab.
    1. In **Purchase Order**, choose **purchase order** from the form .
    2. Choose **Save**

    ![](./images/input.png) 

## You have now completed the development of Approvals.

## Next: [Add CAP Nodejs Action inside SPA](../action/README.md)


