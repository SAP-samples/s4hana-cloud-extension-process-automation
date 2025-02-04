namespace purchaseOrderApp;

entity PurchaseOrders {
  key ID: UUID;
  purchaseOrderNumber: String(20) @assert.unique @mandatory;
  description: String(100);
  status: String;
}
