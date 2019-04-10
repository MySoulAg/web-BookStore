const dbpool = require('../utils/dbutils.js')


//获取 今日 交易记录表的数据
function getTodayMoneydb(time,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select time,money from jiaoyi where time=?`;
            conn.query(sql,[time], function (err2, results) {
                //将返回的结果告诉service
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}


//获取 总共 交易记录表的数据
function getAllMoneydb(bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = "select * from jiaoyi";
            conn.query(sql, function (err2, results) {
                //将返回的结果告诉service
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}


//获取获取分类图书的库存数据
function getKucundb(bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select sum(a.kucun) as allnum,a.id,a.class from 
            (select  bookmenu.kucun,bookclass.id,bookclass.class from bookmenu,bookclass 
            where bookmenu.cid=bookclass.id) as a
            group by a.id`;
            conn.query(sql, function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
    
}

//获取商品管理 的数据
function getShangPinGuanlidb(bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select bookmenu.id,bookclass.class,bookmenu.bookname,bookmenu.oldprice,bookmenu.price,
            bookmenu.kucun,discountlist.discountText,bookmenu.mainurl from bookmenu,bookclass,discountlist
            where bookclass.id=bookmenu.cid and bookmenu.discount=discountlist.discountNum`;
            conn.query(sql, function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//根据商品Id删除商品
function deleteGoodsByIddb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `delete from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//保存修改过后的商品数据
function saveShangPindb(id,bookclass,bookname,oldprice,price,kucun,discountText,mainurl,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `update bookmenu set cid=?,bookname=?,oldprice=?,price=?,kucun=?,discount=?,mainurl=? where id=?`;
            conn.query(sql,[bookclass,bookname,oldprice,price,kucun,discountText,mainurl,id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//搜索类名 或 书名 或 是否打折
function searchClassNameBookNamedb(searchText,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select bookmenu.id,bookclass.class,bookmenu.bookname,bookmenu.oldprice,bookmenu.price,
            bookmenu.kucun,discountlist.discountText,bookmenu.mainurl from bookmenu,bookclass,discountlist
            where bookclass.id=bookmenu.cid and bookmenu.discount=discountlist.discountNum and 
            (bookmenu.bookname like '%${searchText}%' or bookclass.class like '%${searchText}%' 
            or discountlist.discountText like '%${searchText}%')`;
            conn.query(sql, function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

exports.getTodayMoneydb = getTodayMoneydb;
exports.getAllMoneydb = getAllMoneydb;
exports.getKucundb = getKucundb;
exports.getShangPinGuanlidb = getShangPinGuanlidb;
exports.deleteGoodsByIddb = deleteGoodsByIddb;
exports.saveShangPindb = saveShangPindb;
exports.searchClassNameBookNamedb = searchClassNameBookNamedb;



