const divs = document.querySelectorAll(".redirect");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    // const link = div.getAttribute("data-link");
    // window.location.href = "../index.html";
  });
});
// document.getElementById("exames").innerHTML ="<p>teste</>";// localStorage.getItem("num_exames");
// document.getElementById("consultas").textContent = localStorage.getItem("num_consultas");

function Redirect(link){
  if(link == null) link = "../home/home.html";
  
  window.location.href = link;
}


function Sair() {
  window.location.href = "../../../index.html";
}

class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
            />
            <link rel="stylesheet" href="./side-bar.css" />
            <div class="container-side">
            <div class="base foto"><div class="instance-child"></div></div>
            <div class="base" style=" font-weight: bold;">
                <p id="nome" style="margin: 0; font-size: 24px;">Fulano da Silva</p>
                <p id="unidade" style="margin-bottom: 0;">Unidade de saúde X</p>
                <p id="telefone" style="margin: 0;">(00) 0000-0000</p></div>
            <div class="base">
                
            </div>
                <div class="base redirect" onclick=Redirect() data-link="/codigo-fonte/index.html">Minhas mensagens</div>
                <div id="exames" class="base redirect" onclick=Redirect("../meus-exames/meus-exames.html") data-link="/codigo-fonte/index.html">Meus exames</div>
                <div id="consultas" class="base redirect" onclick=Redirect("../meus-exames/meus-exames.html") data-link="/codigo-fonte/index.html">Minhas consultas</div>
                <div class="base redirect" onclick=Redirect()  data-link="../index.html"><span>Inicio</span></div>
                <div class="base redirect" onclick=Redirect() data-link="../index.html">Meu perfil</div>
                <div class="base redirect" onclick=Redirect("../info/info.html") data-link="/codigo-fonte/index.html">Informações</div>
                <div class="base redirect" onclick=Redirect("../FAQ/faq.html") data-link="/codigo-fonte/index.html">
                    Dúvidas frequentes - FAQ
                </div>
                <div class="base foto" style="margin-top: 20px;" >
                    <button class="side-button" onclick=Sair()>Sair</button>
                </div>
            </div>

            <script src="./side-bar.js"></script>
        `;
  }
}

customElements.define("side-bar", SideBar);


document.addEventListener("DOMContentLoaded", function () {
  const elementoExame = document.getElementById("exames");
  const numExames = parseInt(localStorage.getItem("num_exames") || 0);
  if( numExames > 0){
    var indicador = document.createElement("span");
    indicador.className = "indicador";
    indicador.textContent = numExames;
    elementoExame.appendChild(indicador); 
  }

  const elementoCons = document.getElementById("consultas");
  const numConsultas = parseInt(localStorage.getItem("num_consultas") || 0);
  if( numConsultas > 0){
    var indicador = document.createElement("span");
    indicador.className = "indicador";
    indicador.textContent = numConsultas;
    elementoCons.appendChild(indicador); 
  }

  const user = localStorage.getItem("user");
  if(user){
    const userJson = JSON.parse(user);
    document.getElementById("nome").textContent = userJson.nome;
    document.getElementById("unidade").textContent = "Unidade de saúde " + userJson.unidadeSaude;
    document.getElementById("telefone").textContent = userJson.telefone;
  }
});