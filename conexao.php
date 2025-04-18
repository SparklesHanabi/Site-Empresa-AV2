<?php

$host = "localhost";
$id = "root";
$senha = '';
$banco = "formulario";

$conn = new mysqli($host, $id, $senha, $banco);

if($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

echo "conexão com o banco feita com sucesso";

?>

