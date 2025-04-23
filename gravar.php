<?php

// conexão ao MYSQL
require 'conexao.php';

// RECEBE OS DADOS DA PAGINA DE CONTATOS
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

// Salva no arquivo
$linha = fopen("catalogo.txt", "a");
fwrite($linha, "Nome: $nome\nEmail: $email\nMensagem: $mensagem\n---\n");
fclose($linha);

// Query para o banco
$sql = "INSERT INTO formulario (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

// Executa a query
if ($conn->query($sql) === TRUE) {
    // OK!
} else {
    // Se der erro, mostra na tela
    echo "Erro ao salvar no banco: " . $conn->error;
}

$conn->close();

// Redireciona de volta
header("Location: contact.html");
exit;
?>
