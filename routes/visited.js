var express = require('express');
var router = express.Router();

/* GET visited request. */
router.get('/', function(req, res) {
	var channel = req.query['c'];
	console.log ("channel "+channel +" is visited!");
	res.writeHead(200, { });
    res.end();
	    // record the page_visited event
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
              connection.query('INSERT IGNORE INTO Taiwan_WOC_TEST_TRACKING SET ?',{ip:ip,channel:channel,event:"page_visited",time:now}, function (err, result)
              {
		connection.release();
                  if (!!err)
               		console.error (now + " insert page_visited event into mysql db failed "+ err);
		});
          }
    });

});

module.exports = router;