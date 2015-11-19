var path = require('path');
var express = require('express');
var app = express();

app.use('/static', express.static('build'));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});

var server = app.listen(1234, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});

module.exports = server;
