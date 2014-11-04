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

    var filestream = fs.createReadStream(path);
    filestream.pipe(res);

    // record the apt_downloaded event
    var now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    req.getConnection(function(err, connection) {
        if (!!err)
        {
            res.send('MYSQL connection failed'+err);
        }
        else{
            connection.query('INSERT INTO Taiwan_WOC_TEST_TRACKING SET ?',{ip:ip,channel:channel,event:"apk_downloaded",time:now}, function (err, result)
            {
                if (!!err)
                    res.send('insert failed'+err);
            });
        }
    });
});

//function decrypt(text){
//    var decipher = crypto.createDecipher('aes-256-cbc','soulgame')
//    var dec = decipher.update(text,'hex','utf8')
//    dec += decipher.final('utf8');
//    return dec;
//}

module.exports = router;
