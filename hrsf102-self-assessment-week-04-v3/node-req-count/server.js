var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    if (!globalCounter[property]) {
      globalCounter[property] = 0;
    }
    globalCounter[property]++;
    response.writeHead(200, { ContentType: "application/json" });
    response.end();
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    response.writeHead(200, { ContentType: "application/json" });
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
