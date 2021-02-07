const template = document.createElement("template");
template.innerHTML=`
<link rel="stylesheet" href="../css/headerStyles.css" />
<link rel="stylesheet" href="./components/header-styles.css" />
<div class ="nav">
    <div class="logo">
        <h4>Wood-Store</h4>
    </div>
    <div class="nav-item">
        <a class="item"><div>Produtos</div></a>
        <a class="item"><div>Quem Somos</div></a>
        <a class="item"><div>Ajuda</div></a>
    </div>
    <div class="nav-lr">
        <a class="item"><div >Login</div></a>
        <a class="item"><div >Register</div></a>
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
    
        handleClick(burguer, nav,userNav) {
            burguer.addEventListener("click", () => {
                console.log("clicou");
                nav.classList.toggle("nav-active");
                userNav.classList.toggle("nav-active");
            });
        }
    
        connectedCallback() {
            const burguer = this.shadowRoot.querySelector(".burger");
            const nav = this.shadowRoot.querySelector(".nav-item");
            const navTwo = this.shadowRoot.querySelector(".nav-lr");
            this.handleClick(burguer, nav,navTwo);
        }
    }
    
    customElements.define("header-component", Header);