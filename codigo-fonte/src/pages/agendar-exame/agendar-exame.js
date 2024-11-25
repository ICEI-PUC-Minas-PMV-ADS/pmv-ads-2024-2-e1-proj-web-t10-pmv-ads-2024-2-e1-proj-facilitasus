// Obter elementos
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var cancelBtn = document.getElementById("cancelBtn");
var acceptBtn = document.getElementById("acceptBtn");

// Quando o usuário clicar no botão, abrir a modal
btn.onclick = function() {
    modal.style.display = "block";
}

const botoes = document.querySelectorAll('.horario');

// Adiciona a função onClick a cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // console.log('Clique no:', botao.textContent);
        // alert(`Você clicou no: ${botao.textContent}`);
        modal.style.display = "block";
    });
});

// Quando o usuário clicar no <span> (x), fechar a modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar no botão "Cancelar", fechar a modal
cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar no botão "Aceitar", fechar a modal
// acceptBtn.onclick = function() {
//     modal.style.display = "none";
// }

// Quando o usuário clicar fora da modal, fechar a modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}