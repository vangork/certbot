var ALIDNS = require('./alidns');
const dotenv = require('dotenv');
dotenv.config();

var client = ALIDNS({
    accesskeyId: process.env.ACCESS_KEY_ID,
    accesskeySecret: process.env.ACCESS_KEY_SECRET
});

// API概览 :
// https://help.aliyun.com/document_detail/29740.html
client.queryData({
    Action: "DeleteSubDomainRecords",
    DomainName: process.argv[2],
    Type: "TXT",
    RR: process.argv[3],
}, function (err, res) {
    if (err) return console.log(err);
    console.log('success', JSON.stringify(res));
});
