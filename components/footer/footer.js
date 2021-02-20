const templateFooter = document.createElement("template");
templateFooter.innerHTML = `
<link rel="stylesheet" href="../../css/footer.css" />
<footer class ="nav">
    <h2>Todos os diretos reservados &copy - Leandro Safra</h2>
</footer>`;

class Footer extends HTMLElement {
	shadowRoot = this.attachShadow({ mode: "closed" });
	constructor() {
		super();
		this.shadowRoot.appendChild(templateFooter.content);
	}
}

customElements.define("footer-component", Footer);
