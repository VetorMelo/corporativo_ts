// script.js

// Função para alternar a exibição do menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});

// Funções de alerta para botões (mantidas do código anterior)
function mostrarResultado(periodo) {
    alert("Mostrando resultado do " + periodo);
}

function mostrarEquipe(equipe) {
    alert("Mostrando informações da " + equipe);
}

function mostrarPrioridade(prioridade) {
    alert("Mostrando tarefas de " + prioridade + " prioridade");
}

function mostrarInformacao(tipo) {
    alert("Mostrando informações de " + tipo);
}
