const template = document.createElement("template");
template.innerHTML=`
<link rel="stylesheet" href="../css/headerStyles.css" />
<link rel="stylesheet" href="./components/header-styles.css" />
<nav>
    <div class="logo">
        <h4>Wood-Store</h4>
    </div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Projects</a></li>
    </ul>
    <div class="burger"">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>`;
    
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
            const nav = this.shadowRoot.querySelector(".nav-links");
            this.handleClick(burguer, nav);
        }
    }
    
    customElements.define("header-component", Header);