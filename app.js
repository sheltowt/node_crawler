var express = require("express"),
	http = require("http")

var app = express();

var server = http.createServer(app);

server.listen(3000);