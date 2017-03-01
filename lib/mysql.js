const mysql = require("mysql");

console.log("in start of mysql");

const connection = mysql.createConnection({
  host:"localhost",
  user:"yale918"
  password:"yeah31212",
  database:"ricebookdb"
});

connection.connect();
connection.query("select * from logintb",data,function(err){
    if(err) console.log(err);
    else    console.log(data);
})

console.log("in end of mysql");
connection.disconnect();
