<?php

class Goods {
	function __construct($goods) {
		$this->goods = $goods;
		$this->maxGoods = count($this->goods);
	}

	function get($from, $to) {
		$result = [];

		if($to >= $this->maxGoods - 1) {
			$to = $this->maxGoods - 1;
		}

		for($i = $from; $i <= $to; $i++) {
			array_push($result, $this->goods[$i]);
		}

		return json_encode($result);
	}
}

$from = $_GET["from"];
$to = $_GET["to"];
$file = file_get_contents("database.json");
$db = json_decode($file, true);
$goods = new Goods($db["goods"]);

echo $goods->get($from, $to);

?>