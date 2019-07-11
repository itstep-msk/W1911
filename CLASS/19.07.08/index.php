<!DOCTYPE html>
<html>
<head>
	<title>Posts</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>

<div class="container">
<?php
	$db_link = include("db.php");
	$post = file_get_contents("template/post.html");
	$form_add_post = file_get_contents("template/form-add-post.html");
	$nickname = $_POST["nickname"];
	$comment = $_POST["comment"];
	$keywords = ["%user%", "%comment%"];

	// Вывод постов
	function getPosts() {
		global $db_link;
		global $keywords;
		global $post;

		$query = mysqli_query($db_link, "SELECT user, comment FROM posts");

		while($data = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
			echo str_replace($keywords, [$data["user"], $data["comment"]], $post);
		}
	}

	// Вывод формы
	function getForm() {
		global $form_add_post;
		global $nickname;
		global $comment;
		global $db_link;

		if(!empty($nickname) && !empty($comment)) {
			mysqli_query($db_link, "INSERT INTO posts(user, comment) VALUES('$nickname', '$comment')");
			getPosts();
		} else {
			getPosts();
		}

		echo $form_add_post;
	}

	getForm();
?>
</div>

</body>
</html>