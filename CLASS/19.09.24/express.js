var express = require("express");
var bodyParser = require("body-parser");
var server = express();
var news = ["bmw", "mersedes", "audi"];

server.use(bodyParser.urlencoded());
server.listen(7777);

server.get("/", function(request, response) {
	response.send("<h1>Home page</h1>");
})

server.get("/news", function(request, response) {
	response.send(news);
})

server.get("/news/form", function(request, response) {
	// __dirname - полный путь от диска до папки "C:\Users\...";
	response.sendFile(__dirname + "/add-news.html");
})

server.get("/news/:newsId", function(request, response) {
	var id = request.params.newsId;

	response.send(news[id]);
})

server.get("*", function(request, response) {
	response.send("404 not found");
})

// POST

server.post("/news/add", function(request, response) {
	news.push(request.body.title);
	response.send("Данные отправленны");
})