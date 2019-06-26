<!DOCTYPE html>
<html>
<head>
	<title>MYSQL</title>
</head>
<body>

<?php
	$link = mysqli_connect("localhost", "root");
	mysqli_select_db($link, "test");

	$query = mysqli_query($link, "SELECT * FROM users");
	
	while($data = mysqli_fetch_assoc($query)) {
		echo "<br>";
		echo $data["name"];
		echo "<br>";
		echo $data["email"];
	}
?>

</body>
</html>