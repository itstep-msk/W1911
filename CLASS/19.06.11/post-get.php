<?php
	//echo date("Время: H---i:::s");

	// GET Request(Запрос)
	// http://localhost/19.06.11/post-get.php?apple=10&orange=20

	// POST
	// http://localhost/19.06.11/post-get.php
	// data: apple=10&orange=20

	// Глобальные массивы
	// $_GET, $_POST
	// Хранят данные от пользователя
	
	// echo "<pre>";
	// var_dump($_GET);
	// echo "</pre>";
	
	// foreach(МАССИВ as КЛЮЧ => ЗНАЧЕНИЕ)
	// foreach(МАССИВ as ЗНАЧЕНИЕ)

	foreach($_GET as $key => $value) {
		echo $key;
		echo "<br>";
		echo $value;
		echo "<br>";
	}
?>

<form action="" method="GET">
	<input placeholder="Цвет" name="color">
	<input placeholder="Размер" name="size">
	<input type="submit">
</form>