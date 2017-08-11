var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "markibid",
    database: "spk_ahp"
});

exports.testConnection = function (req, res) {
    con.connect(function(err){
        if(err) throw err;
        con.query("SELECT * from alternative", function(err, result, fields){
            if(err) throw err;
            res.json(result);
        });
    });
}

