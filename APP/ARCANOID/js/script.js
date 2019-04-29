var field = document.querySelector(".field");
var ball = document.querySelector(".ball");
var enemy = {
	el: document.querySelector(".enemy"),
	timer: null,
	y: 0,
	resolution: true,
}
var player = {
	el: document.querySelector(".player"),
	y: 0,
	step: 10
}
var x = field.offsetWidth / 2;
var y = field.offsetHeight / 2;
var resolution = {
	x: true,
	y: true
}
var timer;

document.addEventListener("keydown", function(e) {
	if(e.keyCode == 38) {
		if(player.y != 0) {
			player.y -= player.step;	
		}
	}
	if(e.keyCode == 40) {
		// 150 < 200 - 50
		if(player.y < field.offsetHeight - player.el.offsetHeight) {
			player.y += player.step;
		}
	}
	player.el.style.top = player.y + "px";
})
/*
Урок про callback
var apple = function() {}
apple()
apple // function() {}
document = {
	addEventListener: function(eventName, fn) {
		var eventObject = CreateEventInfo()

		if(eventName == "keydown") {
			fn(eventObject)
		}
	}
}
*/

function moveEnemy() {
	var height = field.offsetHeight - enemy.el.offsetHeight;

	if(enemy.resolution == true) {
		enemy.y++;
		if(enemy.y >= height) {
			enemy.resolution = false;
		}
	}
	if(enemy.resolution == false) {
		enemy.y--;
		if(enemy.y <= 0) {
			enemy.resolution = true;
		}
	}
	enemy.el.style.top = enemy.y + "px";
}

function moveBall() {
	var width = field.offsetWidth - ball.offsetWidth // 400 - 10 = 390
	var height = field.offsetHeight - ball.offsetHeight // 200 - 10 = 190

	if(resolution.x == true) {
		x++;
		if(x == width) {
			resolution.x = false;
		}
	}
	if(resolution.x == false) {
		x--;
		if(x == 0) {
			resolution.x = true;
		}
	}
	if(resolution.y == true) {
		y++;
		if(y == height) {
			resolution.y = false;
		}
	}
	if(resolution.y == false) {
		y--;
		if(y == 0) {
			resolution.y = true;
		}
	}
	ball.style.left = x + "px";
	ball.style.top = y + "px";

	function checkPosition() {
		// 150 > 100 // true
		// 50 > 100 // false
		if(ball.offsetTop > player.el.offsetTop
			&& ball.offsetTop < player.el.offsetTop + player.el.offsetHeight
			&& ball.offsetLeft < player.el.offsetLeft + player.el.offsetWidth) {
			resolution.x = true;
		}
		if(ball.offsetTop > enemy.el.offsetTop
			&& ball.offsetTop < enemy.el.offsetTop + enemy.el.offsetHeight
			&& ball.offsetLeft + ball.offsetWidth > enemy.el.offsetLeft) {
			resolution.x = false;
		}
	}
	/*
	1) Когда шар ниже платформы(верхняя граница)
	2) Когда шар выше нижней границы платформы
	3) Когда шар касается платформы
	*/
	function checkGameOver() {
		if(ball.offsetLeft <= 0) {
			clearInterval(timer);
			console.log("gameover");
		}
	}

	checkPosition();
	checkGameOver();
}

enemy.timer = setInterval(moveEnemy, 10);
timer = setInterval(moveBall, 10)