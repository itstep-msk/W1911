<h1>Калькулятор</h1>
<?php
	$a = 10;
	$b = 10;

	echo $a + $b;
?>
<b>Какой-то тег</b>
<?php 
	echo "Че за хрень";
?>
<h2>
<?php 
	$apple = "Яблоко";
	echo $apple;
?>
</h2>

<ul>
<?php 
	for($i = 0; $i < 3; $i++) {
		//echo "<li>Шпроты".$i."</li>";
		echo "<li>Шпроты $i</li>";
	}
?>
</ul>

<h2>Калькулятор</h2>
<?php
	function calc($a, $b) {
		return $a + $b;
	}
	echo "<h3> Результат: ";
	echo calc(10,20);
	echo "</h3>";

	//echo "<h3> Результат: ".calc(10,20)."</h3>";
?>