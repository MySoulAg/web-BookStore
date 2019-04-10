const express = require("express");
const app = express();

//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


//引入service层的js
const servicebox = require('./service/service.js')




//获取 小图片 的地址
app.get("/get-smallpicture-url", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var id=req.query.id;
    //让service层做事
    servicebox.getSmallPictureUrlsv(id,function(results){
        // console.log(results)
        res.json(results)
    })
});

//获取 图书名字 简介
app.get("/get-bookname-describe", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var id=req.query.id;
    //让service层做事
    servicebox.getBookNameDescribesv(id,function(results){
        // console.log(results)
        res.json(results)
    })
    
});

//获取书的 作者 出版社 出版时间
app.get("/get-author-publish-publishTime", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var id=req.query.id;
    //让service层做事
    servicebox.getAuthorPublishPublishTimesv(id,function(results){
        // console.log(results)
        res.json(results)
    })
    
});

//获取书的 原价 现价
app.get("/get-oldprice-price", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var id=req.query.id;
    //让service层做事
    servicebox.getOldPricePricesv(id,function(results){
        // console.log(results)
        res.json(results)
    })
});

//获取 销量
app.get("/get-sales", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var id=req.query.id;
    //让service层做事
    servicebox.getSalessv(id,function(results){
        // console.log(results)
        res.json(results)
    })
});

//获取 库存
app.get("/get-kucun", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var id=req.query.id;
    //让service层做事
    servicebox.getKunCunsv(id,function(results){
        // console.log(results)
        res.json(results)
    })
});

//获取 推荐图书 3本
app.get("/get-tuijian", function(req, res) {
    //设置跨域响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    var cid=req.query.cid;
    //让service层做事
    servicebox.getTuiJiansv(cid,function(results){
        // console.log(results)
        res.json(results)
    })
});







app.listen(8888, function() {
console.log("服务器正在监听中8888");
});
