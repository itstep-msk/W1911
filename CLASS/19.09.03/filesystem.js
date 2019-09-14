var fs = require("fs");

/*
	fs.readFile("Путь/до/файла","utf-8", function() { работа с файлом })
	var file = fs.readFileSync("Путь/до/файла","utf-8") - возвращает файл

	fs.writeFile("Путь/до/файла","Содержимое файла",function() { для ошибок })
	fs.writeFileSync("Путь/до/файла", "Содержимое файла")
*/

fs.writeFile("async.txt", "hello async file", function() {});
fs.writeFileSync("sync.txt", "hello sync file");

fs.readFile("async.txt", "utf-8", function(err,data) {
	console.log(data);
})

var syncFile = fs.readFileSync("sync.txt", "utf-8");
console.log(syncFile)