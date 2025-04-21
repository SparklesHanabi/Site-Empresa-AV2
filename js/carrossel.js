const elementos = document.querySelectorAll(".aside_1 div");

elementos.forEach((elemento) => {
  // Adiciona um listener para quando a animação terminar

  elemento.addEventListener("animationend", (e) => {
    // Verifica qual animação acabou para encadear a próxima

    if (e.animationName === "carrossel_a") {
      // Reinicia a animação carrossel_b

      elemento.style.animation = "none";
      void elemento.offsetHeight;
      elemento.style.animation = "carrossel_b 2.2s ease forwards";
      console.log("Carrossel A terminou; iniciando Carrossel B");

    } else if (e.animationName === "carrossel_b") {
      // Reinicia a animação carrossel_a

      elemento.style.animation = "none";
      void elemento.offsetHeight;
      elemento.style.animation = "carrossel_a 19s ease forwards";
      console.log("Carrossel B terminou; iniciando Carrossel A");
    }
  });
});
