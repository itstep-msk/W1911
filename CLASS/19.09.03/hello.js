var http = require("http"); // http - объект
var fruits = require("./mymodule.js");

console.log(fruits); // "apple"

http.createServer(server).listen(7777);

function server(request, response) {
	response.setHeader("Content-type", "text/html");
	response.write("<h2>Hello from node.js</h2>");
	response.end();
}