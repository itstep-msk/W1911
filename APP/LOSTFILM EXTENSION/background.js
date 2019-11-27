var ajax = new XMLHttpRequest();
var url = "https://www.lostfilm.tv/v_search2.php?a=";

function sendResponse() {
	var externalBtn = document.querySelector(".external-btn");

	if(externalBtn) {
		var id = externalBtn.getAttribute("onclick").match(/\d+/gi)[0];

		ajax.open("GET", url + id, false);
		ajax.send();

		return ajax.responseText;
	}
}