<!DOCTYPE html>
<html>
<head>
	<title>Multipage</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/uikit.min.css">
</head>
<body>
<div class="uk-container">
	<nav class="uk-navbar-container" uk-navbar>
	    <div class="uk-navbar-left">
	        <ul class="uk-navbar-nav">
	            <li><a href="?">Главная</a></li>
	            <li><a href="?page=news">Новости</a></li>
	            <li><a href="?page=gallery">Галерея</a></li>
	        </ul>
	    </div>
	</nav>
<?php
	if($_GET["page"] == "") {
		include("pages/home.php");
	}
	if(file_exists("pages/".$_GET["page"].".php")) {
		include("pages/".$_GET["page"].".php");
	} else if($_GET["page"] != "") {
		echo "<h1>Страница не найдена</h1>";
	}
?>
</div>
<script src="js/uikit.min.js"></script>
</body>
</html>