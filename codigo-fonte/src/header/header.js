class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
        />
        
        <div class="header">
            <img src="/codigo-fonte/img/govbr.png" alt="Ilustração de usuário">
            <nav>
                <a href="#">ACESSO À INFORMAÇÃO</a>
                <a href="#">PARTICIPE</a>
                <a href="#">LEGISLAÇÃO</a>
                <a href="#">ÓRGÃOS DO GOVERNO</a>
            </nav>
        </div>
        <script src="./header.js"></script>
        `;
    }
}

customElements.define("header-comp", Header);