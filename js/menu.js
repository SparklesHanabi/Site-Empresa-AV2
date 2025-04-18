let menuVisivel = false;

function acaoBotao() {
    const menu = document.querySelector("#menu");
    const botao = document.querySelector("#menu-botao");
    const logo = document.querySelector(".logo")

    if (!menuVisivel) {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.gap = '10px';
        logo.style.paddingLeft = "20%";
        menuVisivel = true;
    } else {
        menu.style.display = "none";
        logo.style.paddingLeft = "30%";
        menuVisivel = false;
    }
}
