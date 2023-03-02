const cds = global.cds || require('@sap/cds')
module.exports = async srv => {
    
    const messaging = await cds.connect.to('messaging')
    // Mock events for s4
    srv.after("CREATE", async data => {
        const payload = {KEY: [{BUSINESSPARTNER: data.BusinessPartner}]};
        await messaging.emit("S4H/BO/BusinessPartner/Created", payload);
        console.log('<< event emitted', payload);
    });

    srv.after("UPDATE", async data => {
        const payload = {KEY: [{BUSINESSPARTNER: data.BusinessPartner}]};
        await messaging.emit("S4H/BO/BusinessPartner/Changed", payload);
        console.log('<< event emitted', payload);
    });
}
