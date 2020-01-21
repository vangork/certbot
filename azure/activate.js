const msRestAzure = require("ms-rest-azure");
const DnsManagementClient = require("azure-arm-dns");
const dotenv = require('dotenv');
dotenv.config();

msRestAzure.loginWithUsernamePassword(process.env.AZURE_USERNAME, process.env.AZURE_PASSWORD).then((creds) => {
    const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
    const client = new DnsManagementClient(creds, subscriptionId);
    const resourceGroupName = process.env.AZURE_RESOURCEGROUP_NAME;
    const recordType = "TXT";
    const tTL = 600;
    var zoneName = process.argv[2];
    var relativeRecordSetName = process.argv[3];
    var value = process.argv[4];
    var parameters = {"txtRecords":[{"value":[value]}],"tTL":tTL};
    return client.recordSets.createOrUpdate(resourceGroupName, zoneName, relativeRecordSetName, recordType, parameters).then((result) => {
        console.log("The result is:");
        console.log(result);
    });
}).catch((err) => {
    console.log('An error occurred:');
    console.dir(err, {depth: null, colors: true});
});
