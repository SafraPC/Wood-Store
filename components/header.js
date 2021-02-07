const template = document.createElement("template");
template.innerHTML=`
<link rel="stylesheet" href="../css/headerStyles.css" />
<link rel="stylesheet" href="./components/header-styles.css" />
<div class ="nav">
    <div class="logo">
        <h4>Wood-Store</h4>
    </div>
    <div class="nav-item">
        <div class="item">Produtos</div>
        <div class="item">Quem Somos</div>
        <div class="item">Ajuda</div>
    </div>
    <div class="nav-lr">
        <div class="item">Login</div>
        <div class="item">Register</div>
    </div>
    <div class="burger"">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>`;
    
    class Header extends HTMLElement {
        shadowRoot = this.attachShadow({ mode: "open" });
        constructor() {
            super();
            this.shadowRoot.appendChild(template.content);
        }
    
        handleClick(burguer, nav) {
            burguer.addEventListener("click", () => {
                console.log("clicou");
                nav.classList.toggle("nav-active");
            });
        }
    
        connectedCallback() {
            const burguer = this.shadowRoot.querySelector(".burger");
            const nav = this.shadowRoot.querySelector(".nav-item");
            this.handleClick(burguer, nav);
        }
    }
    
    customElements.define("header-component", Header);