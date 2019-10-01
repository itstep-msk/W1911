var http = require("http");
var options = {
	hostname: "localhost",
  	port: 7777,
  	path: "/?a=20&b=30"
}
var response = http.request(options, responseHandler);

function responseHandler(fromServer) {
	fromServer.on("data", function(answer) {
		console.log(answer.toString("utf8"))
	})
}

response.end();