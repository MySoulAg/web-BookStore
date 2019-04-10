const dbpool = require('../utils/dbutils.js')









//获取商品管理 的数据
function getSmallPictureUrldb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select mainurl,smurlo,smurlt from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//获取 图书名字 简介
function getBookNameDescribedb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select introduce,bookname from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//获取书的 作者 出版社 出版时间
function getAuthorPublishPublishTimedb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select author,press,presstime from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//获取书的 作者 出版社 出版时间
function getOldPricePricedb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select price,oldprice from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//获取 销量
function getSalesdb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select sales from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//获取 库存
function getKunCundb(id,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select kucun from bookmenu where id=?`;
            conn.query(sql,[id], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}

//获取 推荐图书 3本
function getTuiJiandb(cid,bc) {
    /**
     * 1.当连接成功时，err的值为null. 失败时
     * 2.conn是连接对象
     */
    dbpool.pool.getConnection(function (err, conn) {
        if (err) { //失败
            console.log(err);
        } else { //连接成功
            var sql = `select bookname,mainurl,price from bookmenu where cid=? order by rand() limit 3`;
            conn.query(sql,[cid], function (err2, results) {
                //将返回的结果告诉service
                // console.log(results);
                bc(results);
                conn.release(); //释放连接
            });
        }
    });
}





exports.getSmallPictureUrldb = getSmallPictureUrldb;
exports.getBookNameDescribedb = getBookNameDescribedb;
exports.getAuthorPublishPublishTimedb = getAuthorPublishPublishTimedb;
exports.getOldPricePricedb = getOldPricePricedb;
exports.getSalesdb = getSalesdb;
exports.getKunCundb = getKunCundb;
exports.getTuiJiandb = getTuiJiandb;




