function acaoBotao() {
    const menu = document.querySelector("#menu");
    const botao = document.querySelector("#menu-botao");

    if(acaoBotao() == 1) {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}