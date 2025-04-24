<?php

// conexão ao MYSQL
require 'conexao.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

// Salva no arquivo
$linha = fopen("catalogo.txt", "a");
fwrite($linha, "Nome: $nome\nEmail: $email\nMensagem: $mensagem\n---\n");
fclose($linha);

// bota os dados no banco
$sql = "INSERT INTO formulario (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

// Executa o comando
if ($conn->query($sql) === TRUE) {
    // OK!
} else {
    // mostra na tela se der erro
    echo "Erro ao salvar no banco: " . $conn->error;
}

$conn->close();

// mantem na tela de contato
header("Location: contact.html");
exit;
?>
