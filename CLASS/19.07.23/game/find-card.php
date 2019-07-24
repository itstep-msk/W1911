<?php

$serverName = $_GET["server"];
$block = $_POST["block_1"];
$fileName = $serverName.".txt";
$keywords = ["%block_1%", "%block_2%", "%block_3%", "%block_4%", "%block_5%", "%block_6%", "%block_7%", "%block_8%", "%block_9%"];

if(file_exists($fileName)) {
	if(isset($block)) {
		writeToFile();
	}
	$template = file_get_contents($fileName);
	$template = str_replace($keywords, "", $template);
	echo $template;
} else {
	createFirstFile();
	echo file_get_contents($fileName);
}

function createFirstFile() {
	global $fileName;

	$file = fopen($fileName, "w+");
	fwrite($file, file_get_contents("template-field.html"));
	fclose($file);
}

function writeToFile() {
	global $fileName;

	$serverRoom = file_get_contents($fileName);

	foreach($_POST as $key => $value) {
		if(!empty($value)) {
			$serverRoom = str_replace("%".$key."%", $value, $serverRoom);
		}
	}

	$file = fopen($fileName, "w+");
	fwrite($file, $serverRoom);
	fclose($file);
}

?>