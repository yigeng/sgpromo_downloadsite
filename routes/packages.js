var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var fs = require ('fs');

/* GET users listing. */
router.get('/', function(req, res) {
    var channel = req.query['c'];
    var filename = 'skyfall.apk';
    var path = __dirname + '/../packages/'+ channel+"/"+ filename;
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    // res.download(path);


    var filestream = fs.createReadStream(path);

    filestream.pipe(res);
});

//function decrypt(text){
//    var decipher = crypto.createDecipher('aes-256-cbc','soulgame')
//    var dec = decipher.update(text,'hex','utf8')
//    dec += decipher.final('utf8');
//    return dec;
//}

module.exports = router;
