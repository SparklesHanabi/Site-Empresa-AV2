let menuVisivel = false;

function acaoBotao() {
    const menu = document.querySelector("#menu");
    const botao = document.querySelector("#menu-botao");
    const logo = document.querySelector(".logo")

    if (!menuVisivel) {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.gap = '10px';
        logo.style.paddingRight = "50px";
        menuVisivel = true;
    } else {
        menu.style.display = "none";
        logo.style.paddingLeft = "0";
        menuVisivel = false;
    }
}

window.addEventListener("resize", function () {
    const menu = document.querySelector("#menu");
    const logo = document.querySelector(".logo");

    if (window.innerWidth > 768) {
        menu.style.display = "flex";
        menu.style.flexDirection = "row";
        menu.style.gap = "";
        logo.style.paddingLeft = "";
        menuVisivel = false;
    }
});
