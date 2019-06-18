<?php 
	// $file = fopen("data.txt", "a+");
	// // a+ позволяет дописывать в конец файла
	// // w+ перезаписывает файл полностью
	// // write - запись fwrite(КУДА ЗАПИСЬ, ЧТО ЗАПИСЫВАТЬ)
	// fwrite($file, "Че-то записали..."); 
	// fclose($file); // закрыть файл

	// echo file_get_contents("data.txt");
?>

<form action="" method="POST">
	<input placeholder="Имя" name="firstName">
	<input placeholder="Фамилия" name="lastName">
	<input type="submit">
</form>

<?php 
	$file = fopen("data.txt", "a+");
	$first_name = $_POST["firstName"];
	$last_name = $_POST["lastName"];
	$row = "<tr><td>$first_name</td><td>$last_name</td></tr>";

	// if(!empty(...)) = если НЕ ПУСТОЕ(...)
	if(!empty($first_name) && !empty($last_name)) {
		fwrite($file, $row);
		fclose($file);
	}

	echo "<table border='1' width='100%'>";
	echo "<tr><td>Имя</td><td>Фамилия</td></tr>";
	echo file_get_contents("data.txt");
	echo "</table>";
?>