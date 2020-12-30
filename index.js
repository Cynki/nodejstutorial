var express = require("express");
var app = express();

app.get('/', function(req, res, next) {
    console.log(req);
    // console.log(res);
    // console.log(next);
    res.send("Hello world!");
});

var port = 3000;
app.listen(port, function() {
    console.log("server on! http://localhost:"+port);
});