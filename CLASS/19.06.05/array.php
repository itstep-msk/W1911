<?php

	$array = [1,2,3, "Moscow"=> 17000000];
	//echo $array;
	echo "<pre>";
	var_dump($array);
	echo "</pre>";
	echo $array[0]; // 1
	echo "<br>";
	echo $array["Moscow"]; // 17000000
	echo "<br>";
	echo rand(5, 10);
	echo "<br>";

	array_push($array, 10);
	$array[] = 20;
	echo "<pre>";
	var_dump($array);
	echo "</pre>";

	foreach($array as $key => $value) {
		echo "Ключ: ".$key;
		echo " Значение: ".$value;
		echo "<br>";
	}
?>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>