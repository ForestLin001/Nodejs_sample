const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'secret',
    database : 'database'
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT * FROM data', function(err, rows) {
    if(err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});
