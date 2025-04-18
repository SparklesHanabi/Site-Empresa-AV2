document.querySelector("#formulario").addEventListener('submit', () => {
const mensagemDiv = document.getElementById('mensagem');    

mensagemDiv.style.opacity = "1";
mensagemDiv.style.gap = "10px";

setTimeout(() => {
    mensagemDiv.style.opacity = "0"; mensagemDiv.style.transition = "opacity 0.3s"}, 2000);
});
