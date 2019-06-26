<!DOCTYPE html>
<html>
<head>
	<title>MYSQL ADD</title>
</head>
<body>

<form action="" method="POST">
	<input name="name">
	<input name="email">
	<input type="submit">
</form>

<?php
	$link = mysqli_connect("localhost", "root");
	mysqli_select_db($link, "test");

	$name = $_POST["name"];
	$email = $_POST["email"];

	if(!empty($name) && !empty($email)) {
		mysqli_query($link, "INSERT INTO users(name, email) VALUES('$name','$email')");
	}

	$query = mysqli_query($link, "SELECT * FROM users");
	
	echo "<table border='1' width='100%'>";

	/*
	mysqli_fetch_assoc возвращает строку с данными и автоматически инкрементируется

	mysqli_fetch_assoc(запрос) // 1-ая строка
	mysqli_fetch_assoc(запрос) // 2-ая строка

	Чтобы все получить лучше в цикл while обернуть
	*/

	while($data = mysqli_fetch_assoc($query)) {
		echo "<tr>";
		echo "<td>".$data["name"]."</td>";
		echo "<td>".$data["email"]."</td>";
		echo "</tr>";
	}

	echo "</table>";
?>

</body>
</html>