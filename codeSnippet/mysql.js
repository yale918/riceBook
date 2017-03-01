var mysql = require("mysql");

var connection = mysql.createConnection({
    host:'localhost',
    user:'yale918',
    password:'yeah31212',
    database:'ricebookdb'
});


connection.connect();

connection.query("select * from logintb",data, function(err){
    if(err) console.log(err);
    else    console.log(data);
});

connection.disconnect();
