var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'test-pos-ecom-erp',
    port : '3306'
});

connection.connect();

// var sql = 'SELECT * FROM websites' ; //查询数据；

// var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)' ; //插入数据；
// var addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];

// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';//更新数据；
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];

var delSql = 'DELETE FROM websites where id=3';//删除数据；

connection.query(delSql,function(error,results,fields){
    if(error){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('-----------------SELECT--------------------');
    // console.log('INSERT ID',results);
    console.log('UPDATE affectedRows',results.affectedRows)
    console.log('-----------------SELECT--------------------\n\n');
});

connection.end();