// Пакет для создания сервера http
var http = require("http");

// Создание сервера и порт, по которому он будет доступен http://localhost:7777
http.createServer(server).listen(7777);

// Эта функция нужна для обработки запросов/ответов
// request - объект инфа о запросе (Кто, с какого браузера, GET данные и т.д.)
// response - объект для упрвления ответами (Кому, какие данные отправить и т.д.)
function server(request, response) {
	// Устанавливаем заголовок, что отправляемый текст будет html
	response.setHeader("Content-type", "text/html");
	response.write("<h2>Hello world</h2>");
	// Преобразуем "/?test=123" => {"test": "123"}
	var params = {};
	var getParamArray = request.url.replace("/?","").split("=");

	for(var i = 0; i < getParamArray.length; i++) {
		params[getParamArray[i]] = getParamArray[i+1];
		i++;
	}

	console.log(params) // "/?test=123" - {"test": "123"}
	response.end(); // закрыть соединение
}

// localhost:7777?test=123