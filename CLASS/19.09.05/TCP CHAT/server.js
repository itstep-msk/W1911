var server = require("net");

server.createServer(function(user) {
	console.log("user connected");
	user.setEncoding("utf8");
	// если нет обработчика error то сервер будет выбрасывать ошибку
	user.on("error", function() {})
	// если клиент отключился вызывается событие close
	user.on("close", function() {
		console.log("user diconnected");
	})
	// если клиент отправил данные вызывается событие data
	user.on("data", function(data) {
		console.log(data);
		user.write("Hello from SERVER!!!!!!!!!!!!");
	})
}).listen(7777);