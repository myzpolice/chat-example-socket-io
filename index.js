var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

/*
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "markibid",
  database: "spk_ahp"
});

app.get('/alternative', function(req, res){
  con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * from alternative", function(err, result, fields){
        if(err) throw err;
        res.json(result);
    });
});
});
*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  test.testConnection();
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});