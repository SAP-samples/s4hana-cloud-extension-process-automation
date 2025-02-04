using { purchaseOrderApp } from '../db/schema.cds';

@path : '/service/purchaseOrderApp'
service purchaseOrderAppSrv
{
    entity PurchaseOrders as
        projection on purchaseOrderApp.PurchaseOrders;

    action updatespo(po:String,status:String) returns array of String;
}
