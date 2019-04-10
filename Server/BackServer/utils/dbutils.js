var mysql = require('mysql');
//创建了一个数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bookstore'
});

exports.pool = pool;