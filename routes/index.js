var express = require('express');
var router = express.Router();

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
    product_package_url:'http://app.soulgame.com/14/34/41/apk/skyfall.apk',

    // localizable strings
    download:'下载',
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
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', params);
});

module.exports = router;
