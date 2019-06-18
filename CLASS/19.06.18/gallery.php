<?
	echo "<pre>";
	var_dump(scandir('images/'));
	echo "</pre>";

	$files = scandir('images/');
	// echo "<img src='images/$files[2]'>";
	// Через цикл вывести содержимое всей папки

	foreach ($files as $key => $value) {
		if($value == "." || $value == "..") {
			continue;
		}
		echo "<img src='images/$value'>";
	}
	// Совместить загрузку файла и отображение содержимого папки
	
?>