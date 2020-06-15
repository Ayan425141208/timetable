var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kbdnrx88@6710",
    database: "world"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO employee(UniqID, Name, EmailId, PhoneNo, Profession) VALUES('SLR3049', 'Amitava Mukharjee', 'amitava@gmail.com', '891829375', 'professor')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});