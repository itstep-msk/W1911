var net = require("net");
var client = new net.Socket();
var user = {
	name: process.argv[2].slice(5),
	message: "hello from client"
};

client.connect(7777, "localhost", function() {
	client.write(JSON.stringify(user));
});

client.on("data", function(data) {
	console.log(data);
})

/*
var user = { nick: "Alex", message: "hello" }
JSON.stringify(user) => "{"nick":"Alex","message":"hello"}"

JSON.parse('{"nick":"Alex","message":"hello"}') => {nick: "Alex", message: "hello"}
*/