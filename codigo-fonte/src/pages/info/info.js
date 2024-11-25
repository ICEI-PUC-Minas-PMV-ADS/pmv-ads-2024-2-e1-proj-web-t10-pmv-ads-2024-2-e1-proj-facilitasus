let currentStep = 1;
const totalSteps = 5;

// Exibe o passo atual e oculta os outros
function showStep(step) {
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`step${i}`);
        if (i === step) {
            stepElement.classList.add('active');
        } else {
            stepElement.classList.remove('active');
        }
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }

    // Desabilitar o botão quando chegar ao final
    if (currentStep === totalSteps) {
        document.getElementById('nextBtn').textContent = 'Finalizado';
        document.getElementById('nextBtn').disabled = true;
    }

    // Inicializa com o primeiro passo
    showStep(currentStep);
}