<?php 

$nick = $_GET["nick"]; // Получаем имя из GET запроса
$message = $_GET["message"]; // которое пришло из ajax

$file = fopen("history.txt", "a+"); // Открыли файл
fwrite($file, "<b>".$nick."</b>: ".$message."<br>"); // Записали в файл
fclose($file); // Закрыли файл

echo file_get_contents("history.txt"); // Прочитали и отправли содержимое файла
?>