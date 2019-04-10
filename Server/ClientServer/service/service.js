
//引入service层的js
const databasebox = require('../database/database.js')






//获取商品管理 的数据
function getSmallPictureUrlsv(id,bc) {
    //让数据库层做事
    databasebox.getSmallPictureUrldb(id,function(results){
        bc(results)
    })
}

//获取 图书名字 简介
function getBookNameDescribesv(id,bc) {
    //让数据库层做事
    databasebox.getBookNameDescribedb(id,function(results){
        bc(results)
    })
}

//获取书的 作者 出版社 出版时间
function getAuthorPublishPublishTimesv(id,bc) {
    //让数据库层做事
    databasebox.getAuthorPublishPublishTimedb(id,function(results){
        bc(results)
    })
}

//获取书的 原价 现价
function getOldPricePricesv(id,bc) {
    //让数据库层做事
    databasebox.getOldPricePricedb(id,function(results){
        bc(results)
    })
}

//获取 销量
function getSalessv(id,bc) {
    //让数据库层做事
    databasebox.getSalesdb(id,function(results){
        bc(results)
    })
}

//获取 库存
function getKunCunsv(id,bc) {
    //让数据库层做事
    databasebox.getKunCundb(id,function(results){
        bc(results)
    })
}

//获取 推荐图书 3本
function getTuiJiansv(cid,bc) {
    //让数据库层做事
    databasebox.getTuiJiandb(cid,function(results){
        bc(results)
    })
}



exports.getSmallPictureUrlsv=getSmallPictureUrlsv;
exports.getBookNameDescribesv=getBookNameDescribesv;
exports.getAuthorPublishPublishTimesv=getAuthorPublishPublishTimesv;
exports.getOldPricePricesv=getOldPricePricesv;
exports.getSalessv=getSalessv;
exports.getKunCunsv=getKunCunsv;
exports.getTuiJiansv=getTuiJiansv;





