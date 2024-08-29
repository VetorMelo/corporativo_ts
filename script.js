var lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        navbar.style.top = "-60px"; // Esconde a navbar (ajuste o valor conforme a altura da sua navbar)
    }
    else {
        // Rolando para cima
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar números negativos
});

// Evento click para acessar conteudo.index
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    window.location.href = 'conteudo.html'; // Redireciona para a nova página
});
