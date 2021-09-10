var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'centralsystem'
});

connection.connect();

connection.query('SELECT * FROM centralsystem.t_user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});