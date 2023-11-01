<?php

$con = mysqli_connect
("localhost", "root", "123456", "//nome da tabela//");

// verificada a conexão

if (mysqli_connect_ernor()){
echo "Impossivel de conectar com o mySQL";
exit();
}

?>
