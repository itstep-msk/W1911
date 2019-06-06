<?php
	// POST - закрытый запрос(данные передаются скрытно)
	// GET - открытый запрос(данные в URL передаются)
	// $_GET, $_POST
	echo "<pre>";
	var_dump($_GET);
	// echo $_GET["fish"];
	// echo $_GET["animals"];
	echo "</pre>";
	echo "<pre>";
	var_dump($_POST);
	echo "</pre>";

?>