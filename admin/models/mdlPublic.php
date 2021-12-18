<?php

require_once "conexion.php";

class mdlPublic {

    #BUSCA UN CLIENTE
	#-------------------------------------

	public function mdlSearchBox(){

		$stmt = Conexion::conectar()->prepare("SELECT * FROM clientes");

		$stmt -> execute();

		return $stmt -> fetchAll(PDO::FETCH_ASSOC);

	}

	public function mdlLiveSearch($nombres){

		$stmt = Conexion::conectar()->prepare("SELECT * FROM clientes WHERE nombres LIKE :nombres OR idCliente LIKE :nombres OR apellidos LIKE :nombres");
		
		$stmt -> execute(["nombres" => "%" . $nombres . "%"]);

		return $stmt -> fetchAll(PDO::FETCH_ASSOC);

	}


}// Class

?>