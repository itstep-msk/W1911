<!DOCTYPE html>
<html>
<head>
	<title>Site</title>
	<link rel="stylesheet" href="css/uikit.min.css">
</head>
<body>

<div class="uk-container">
<?php
	$user_pic = [
		"https://i.pravatar.cc/80?0",
		"https://i.pravatar.cc/80?1",
		"https://i.pravatar.cc/80?2",
		"https://i.pravatar.cc/80?3",
		"https://i.pravatar.cc/80?4"
	];
	$names = ["Alex", "Bob", "Elis", "Olivia", "Ruby"];
	$keywords = ["%user_pic%", "%user_name%"];
	$template = file_get_contents("template-comment.html");

	// Создаем массив для коментариев
	$comments = [];

	// Набиваем массив комменентариями с именами и ссылками на аватары
	for($i = 0; $i < count($names); $i++) {
		$comments[] = str_replace($keywords, [$user_pic[$i], $names[$i]] , $template);
		
	}

	// $template = str_replace($keywords, [$user_pic[0], $names[0]] , $template);
	// str_replace(Что искать, на что менять, где менять) 

	// Перебираем массив с комментариями и отображаем их
	for($i = 0; $i < count($comments); $i++) {
		echo $comments[$i];
	}
?>
</div>

<script src="js/uikit.min.js"></script>
</body>
</html>