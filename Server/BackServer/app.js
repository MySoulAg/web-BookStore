const express = require("express");
const app = express();

//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


//引入service层的js
const servicebox = require('./service/service.js')


//获取 今日 交易记录表的数据
app.get("/get-jiaoyi-todayData", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var time = req.query.time;
    // console.log(time);
    //让service层做事
    servicebox.getTodayMoneysv(time,function(results){
        // console.log(results)
        res.json(results)
    })
});

//获取 总共 交易记录表的数据
app.get("/get-jiaoyi-allData", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    //让service层做事
    servicebox.getAllMoneysv(function(results){
        // console.log(results)
        res.json(results)
    })
});


//获取获取分类图书的库存数据
app.get("/get-class-kucun", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    //让service层做事
    servicebox.getKucunsv(function(results){
        // console.log(results)
        res.json(results)
    })
});

//获取商品管理 的数据
app.get("/get-ShangPinGuanLi-Data", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    // //让service层做事
    servicebox.getShangPinGuanlisv(function(results){
        // console.log(results)
        res.json(results)
    })
});

//根据商品Id删除商品
app.get("/delete-goods-byId", function(req, res) {
    var id = req.query.id;
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    // //让service层做事
    servicebox.deleteGoodsByIdsv(id,function(results){
        // console.log(results)
        res.json(results)
    })
});

//保存修改过后的商品数据
app.get("/save-ShangPinGuanLi-Data", function(req, res) {
    var id = req.query.id;
    var bookclass = req.query.bookclass;
    var bookname = req.query.bookname;
    var oldprice = req.query.oldprice;
    var price = req.query.price;
    var kucun = req.query.kucun;
    var discountText = req.query.discountText;
    var mainurl = req.query.mainurl;
    // console.log(id,bookclass,bookname,oldprice,price,kucun,discountText,mainurl);
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    //让service层做事
    servicebox.saveShangPinsv(id,bookclass,bookname,oldprice,price,kucun,discountText,mainurl,function(results){
        // console.log(results)
        res.json(results)
    })
});

//搜索类名 或 书名 或 是否打折
app.get("/search-className-bookName", function(req, res) {
    var searchText = req.query.searchText;
    // console.log(searchText);
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    // //让service层做事
    servicebox.searchClassNameBookNamesv(searchText,function(results){
        // console.log(results)
        res.json(results)
    })
});

app.listen(9999, function() {
console.log("服务器正在监听中9999");
});
