<?php 
// Устанавливаем заголовок "изображение png"
// Так как без этого не будет отображатся изображение созданное через php
header("Content-type: image/png");

//?width=100&height=200
$width = $_GET["width"];
$height = $_GET["height"];

// Создание полотна
$image = imagecreate($width, $height);
// Заливка полотна
imagecolorallocate($image, 204, 204, 204);
// Добавление текста
$text_color = imagecolorallocate($image, 150, 150, 150);

$text = $width."x".$height;

// X
$text_width = imagefontwidth($text) * strlen($text);
$center = ceil($width / 2);
$x = $center - ceil($text_width / 2);
// Y
$text_height = imagefontheight($text);
$center = ceil($height / 2);
$y = $center - ceil($text_height / 2);

imagestring($image, 10, $x, $y, $text, $text_color);

// Конвертация в нужный формат и отображение
imagepng($image);

?>