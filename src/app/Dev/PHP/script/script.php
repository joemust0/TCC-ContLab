<?php

// retirar menasem de erro
error_reporting(0);

// faz a conexão
include "//nome tabela//";

// recebe valores externos (GET, POST, URL) do app
$titulo - $_POST("titulo");

//Execult a consulta
$sql = "SELECT * FROM //informação da tabela//";
$result - mysql-_query($con, $sql);

$lista -[];

while($row - mysqli_fetch_assoc(result)){
$lista[] = $row;
}

//converte array em json
echo json_encode($lista, JSON_UNESCAPED_UNICODE);

//Fecha conexão
mysqli_close($con);
?>
