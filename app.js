var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();

app.get('/', function(request, response) {
	response.sendfile(__dirname + '/index.html');
}).configure(function() {
	app.use('/images', express.static(__dirname + '/images'));
}).listen(port);/**
 * Created by user on 11.04.2017.
 */
