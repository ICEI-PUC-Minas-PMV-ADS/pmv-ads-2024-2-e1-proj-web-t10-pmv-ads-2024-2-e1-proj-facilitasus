document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cpf = document.getElementById('cpf').value.replace(/\D/g, '');

        // Colocar lógica de validação do CPF
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            alert('CPF inválido.');
            return;
        }
        if(localStorage.getItem("user")){
            window.location.href = 'src/pages/home/home.html';

        } else {
            window.location.href = 'src/pages/cadastro/cadastro.html';

        }
        
        
        
    });
});

function submitForm() {
    const form = document.getElementById('login-form');
    form.dispatchEvent(new Event('submit'));
}
