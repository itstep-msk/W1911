<?
	// echo "<pre>";
	// var_dump($_FILES["first_upload_file"]);
	// echo "</pre>";

	$data = $_FILES["first_upload_file"];
	$file_name = date("H_i_s").$data["name"]; // Старое название
	$tmp_folder = $data["tmp_name"]; // Путь до временной папки

	move_uploaded_file($tmp_folder, 'images/'.$file_name);
	// C:\tmp\fdhskjfds.tmp => C:\webserver\image.jpg
?>