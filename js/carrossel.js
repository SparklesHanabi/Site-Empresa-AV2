const elemento_1 = document.querySelectorAll('.a_scroll_1');
const elemento_2 = document.querySelectorAll('.a_scroll_2');


let contador = 1;

function adicional() {

    if (contador === 3) {
        contador = 1
    } else {
        contador++
    }
}

function cliqueVirtual() {

    adicional()
    if (contador === 1) {
        elemento_1[0].click();
        console.log("status: 1")
    } else if (contador == 2) {
        elemento_2[0].click();
        console.log("status: 2")
    }
}

setInterval(cliqueVirtual, 3000);
