document.addEventListener("DOMContentLoaded", function () {
document.getElementById("formulario-cadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const unidadeSaude = document.getElementById("unidade").value;
    const idade = document.getElementById("idade").value;
    const endereco = document.getElementById("endereco").value;

    
    const dados = {
      nome: nome,
      telefone: telefone,
      unidadeSaude: unidadeSaude,
      idade: parseInt(idade),
      endereco: endereco
    };


    const text = JSON.stringify(dados, null, 2);

    
    console.log("JSON Gerado:", text);
    localStorage.setItem("user", text);
    window.location.href = "../home/home.html";
  });
});