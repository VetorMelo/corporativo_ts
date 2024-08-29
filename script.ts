let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar") as HTMLElement;
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Rolando para baixo
    navbar.style.top = "-60px"; // Esconde a navbar (ajuste o valor conforme a altura da sua navbar)
  } else {
    // Rolando para cima
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar números negativos
});
