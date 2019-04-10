
//引入service层的js
const databasebox = require('../database/database.js')

//获取 今日 交易记录表的数据
function getTodayMoneysv(time,bc) {
    //让数据库层做事
    databasebox.getTodayMoneydb(time,function(results){
        bc(results)
    })
}

//获取 总共 交易记录表的数据
function getAllMoneysv(bc) {
    //让数据库层做事
    databasebox.getAllMoneydb(function(results){
        bc(results)
    })
}

//获取获取分类图书的库存数据
function getKucunsv(bc) {
    //让数据库层做事
    databasebox.getKucundb(function(results){
        bc(results)
    })
}

//获取商品管理 的数据
function getShangPinGuanlisv(bc) {
    //让数据库层做事
    databasebox.getShangPinGuanlidb(function(results){
        bc(results)
    })
}

//根据商品Id删除商品
function deleteGoodsByIdsv(id,bc) {
    //让数据库层做事
    databasebox.deleteGoodsByIddb(id,function(results){
        bc(results)
    })
}

//保存修改过后的商品数据
function saveShangPinsv(id,bookclass,bookname,oldprice,price,kucun,discountText,mainurl,bc) {
    //让数据库层做事
    databasebox.saveShangPindb(id,bookclass,bookname,oldprice,price,kucun,discountText,mainurl,function(results){
        bc(results)
    })
}

//搜索类名 或 书名 或 是否打折
function searchClassNameBookNamesv(searchText,bc) {
    //让数据库层做事
    databasebox.searchClassNameBookNamedb(searchText,function(results){
        bc(results)
    })
}


exports.getTodayMoneysv=getTodayMoneysv;
exports.getAllMoneysv=getAllMoneysv;
exports.getKucunsv=getKucunsv;
exports.getShangPinGuanlisv=getShangPinGuanlisv;
exports.deleteGoodsByIdsv=deleteGoodsByIdsv;
exports.saveShangPinsv=saveShangPinsv;
exports.searchClassNameBookNamesv=searchClassNameBookNamesv;




