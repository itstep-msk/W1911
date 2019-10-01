var http = require("http");
var url = require("url");
var server = new http.Server(); // Создать объект сервер

// создать порт, по которому будет доступен сервер
server.listen(7777); 
// когда подкоючаеся к серверу вызывается событие request
server.on("request", requestHandler);

function requestHandler(request, response) {
	var parseResult = url.parse(request.url, true);

	console.log(+parseResult.query.a + +parseResult.query.b)

	response.end("Hello world");
}