const dotenv = require('dotenv');
dotenv.config();
var freenom = require("freenom-dns").init(process.env.FREENOM_ACCOUNT, process.env.FREENOM_PASSWORD);

freenom.dns.addRecord(process.argv[2], "TXT", process.argv[3], 600)
.then(function(ret) {
    console.log(ret)
})
.catch((err) => {
    console.log(err);
});
