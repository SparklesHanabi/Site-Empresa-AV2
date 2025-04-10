function acaoFormulario() {       
    const mensagemDiv = document.getElementById('mensagem');    
    document.getElementById('inome').value = ""; // Clear name input
    document.getElementById('iemail').value = ""; // Clear email input
    document.getElementById('inumero').value = ""; // Clear phone input

    mensagemDiv.style.opacity = "1";
    mensagemDiv.style.gap = "10px";

    setTimeout(() => {
        mensagemDiv.style.opacity = "0"; mensagemDiv.style.transition = "opacity 0.3s"}, 2000);
    }
