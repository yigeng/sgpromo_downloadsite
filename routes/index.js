var express = require('express');
var router = express.Router();
var crypto = require('crypto');

params = {
    // product specific information
    product_name: '天降',
    product_version:'3.2.1',
    product_size:'95MB',
    product_producer:'北京魂世界',
    product_last_update:'2014.9.24',
    // 页面左上角游戏的主icon
    product_main_icon_url:'http://app.soulgame.com/app/34/icons/icon.57%C3%9757.png',
    product_photo_1_url:'http://app.soulgame.com/app/34/images/skyfall_1.jpg',
    product_photo_2_url:'http://app.soulgame.com/app/34/images/skyfall_2.jpg',
    product_photo_3_url:'http://app.soulgame.com/app/34/images/skyfall_3.jpg',
    product_photo_4_url:'http://app.soulgame.com/app/34/images/skyfall_4.jpg',
    product_photo_5_url:'http://app.soulgame.com/app/34/images/skyfall_5.jpg',
    product_package_url:'/packages?c=',

    // localizable strings
    download:'下载',
    downloaded:'已下载',
    version:'版本',
    version_number:'版本号',
    producer:'制作方',
    last_update:'上次更新',
    package_size:'安装包大小',
    download_install: '下载安装',
    photo_division: '图片区域',
    update_details: '更新内容',
    detailed_description:'内容介绍',
    other_information:'其他信息'
}

white_list = ['56','57','58','59','60'];

/* GET home page. */
router.get('/', function(req, res) {
    var channel = req.query['c'];

    // 非法channel
    if (white_list.indexOf(channel) == -1){
        res.status(404);
        var url = req.url;
        res.render('404.jade', {title: '404: File Not Found', url: url });
        return;
    }

    var product_package_url = '/packages?c=';
    params['product_package_url'] = product_package_url + channel;
    res.render('index', params);

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
//
//function encrypt(text){
//    var cipher = crypto.createCipher('aes-256-cbc','soulgame')
//    var crypted = cipher.update(text,'utf8','hex')
//    crypted += cipher.final('hex');
//    return crypted;
//}

module.exports = router;
