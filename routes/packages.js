var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res) {
    var encrypted_channel = req.query['channel'];
    var channel = decrypt(encrypted_channel);
    var path = __dirname + '/../packages/'+ channel+ '/skyfall.apk';
    res.download(path);
});

function decrypt(text){
    var decipher = crypto.createDecipher('aes-256-cbc','soulgame')
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

module.exports = router;
