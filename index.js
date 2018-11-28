var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send("Hello world");
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

app.listen(3000, () => { console.log("connected on port 3000"); })