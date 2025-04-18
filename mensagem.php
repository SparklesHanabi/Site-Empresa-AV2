<!DOCTYPE html>
<?php
require 'conexao.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
if(file_exists("catalogo.txt"))
    $linha = file("catalogo.txt");
    echo "<div class= 'catalogo'>";
    foreach($linha as $linha) {
        list($nome, $email, $mensagem) = explode ("|", trim($linha));

        echo "<div class='catalogo'>
        <h3>$nome</h3>
        <p>$email</h3>
        <p>$mensagem</p>
        </div>";
}
?>
</body>
</html>