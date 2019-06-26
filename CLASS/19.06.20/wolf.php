<?php session_start();
// echo "<pre>";
// var_dump($_SESSION);
// echo "</pre>";
//echo $_SESSION["a"];

if($_SESSION["a"]) {
	echo "Сессия есть:".$_SESSION["a"];
} else {
	echo "Сессия отсутствует";
}
// Создание
// 1) Создание сесси - pork.php
// 2) Проверка сесси - wolf.php // true

// Удаление
// 1) Удаление сессии - exit.php
// 2) Проверка сессии - wolf.php // false
?>