"use strict";
var http = require("http");
var url = require('url');
var fs = require('fs')
var events = require('events');

http.createServer(function(req,res) {
    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    console.log(q.pathname);
    fs.readFile(filename , function(err,data) {
        if(err){
            res.writeHead(404,{'Content-type':'text/html'})
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);