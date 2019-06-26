<?php
	echo "<h1>Галерея</h1>";
	$images = scandir("./img");

	echo "<div class='uk-margin-remove' uk-grid>";

	foreach($images as $key => $value) {
		if($value == "." || $value == "..") {
			continue;
		}
		echo "<div class='uk-card uk-width-1-3 uk-card-default uk-card-body'>";
		echo "<img src='img/$value'>";
		echo "</div>";
	}

	echo "</div>";
	
?>