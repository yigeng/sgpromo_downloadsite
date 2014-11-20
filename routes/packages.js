var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var fs = require ('fs');

apk_links = {
    "56":"http://fastdcc.gamefirst.com.tw/soulgame/test.apk"
}

/* GET users listing. */
router.get('/', function(req, res) {
    var channel = req.query['c'];
//    var filename = 'DuelOfHeros.apk';
//    var path = __dirname + '/../packages/'+ channel+"/"+ filename;
//    var stats = fs.statSync(path);
//    var fileSize = stats["size"];
//    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
//    res.setHeader('Content-Length',fileSize);   


//    var filestream = fs.createReadStream(path);
//    filestream.pipe(res);
     var apk_name = "DuelOfHeros.apk ";
     var apk_address = "http://fastdcc.gamefirst.com.tw/soulgame/app/"+channel+"/"+apk_name;

     res.writeHead(302, {
        'Location': apk_links[channel]
        //add other headers here...
    });
    res.end();
    // record the apt_downloaded event
    var now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    req.getConnection(function(err, connection) {
     if (!!err)
        {
        	console.error (now + " get mysql connection failed "+ err);
	}
        else{
            connection.query('INSERT IGNORE INTO Taiwan_WOC_TEST_TRACKING SET ?',{ip:ip,channel:channel,event:"apk_downloaded",time:now}, function (err, result)
            {
		connection.release();
                if (!!err)
            		console.error (now + " insert into mysql db failed "+ err);
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
