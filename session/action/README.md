# Add Action to Integrate Cloud Application in SAP Build Process Automation.

1. In the Approve section of approval, choose **+**, and then choose **Approval**.

![](./images/add.png)

2. Choose Action **Invokes action updatespo** and thenchoose **Add**.

![](./images/invoke.png)

3. In the action, choose **General**.
    1. Choose **Destination Variable** and create.
    ![](./images/general.png)

    2. in the identifier, enter **dest**. and then choose **Create**.
    ![](./images/iden.png)

4. In the action, choose **inputs**.
    1. In the **po**, choose **Purchase Order** from purchaseform.
    2. In the **status**, choose **Status with Comment** from ApprovePurchase(Approval).
    3. Choose **Save**
    ![](./images/input.png)

## You have Successfully integrated the Actions.     


