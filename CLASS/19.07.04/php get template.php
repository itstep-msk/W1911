<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php 
$template = "Фрукты %fruitsName% <br> Количество %fruitsValue% ";

$apple = "Яблоки";
$value = 10+20;

$keywords = ["%fruitsName%", "%fruitsValue%"];
$result = [$apple, $value]

$template = str_replace($keywords, $result, $template);
// "Фрукты Яблоки <br> Количество %fruitsValue% "
//$template = str_replace("%fruitsValue%", $value, $template);
// Фрукты Яблоки <br> Количество 30

echo $template;
?>
</body>
</html>