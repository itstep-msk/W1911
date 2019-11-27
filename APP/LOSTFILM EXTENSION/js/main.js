var button = document.querySelector("button");
var ajax = new XMLHttpRequest();

button.addEventListener("click", function() {
	chrome.tabs.executeScript({
	    	code: 'sendResponse()'
	}, getResponse);
})

function getResponse(response) {
	var url = response[0].match(/(?<=location.replace\(")(.*)(?="\))/gi)[0];

	getLinks(url);
}

function getLinks(url) {
	ajax.open("GET", url, false);
	ajax.send();

	console.log(ajax.responseText);
}