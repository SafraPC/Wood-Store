const templateFooter = document.createElement("template");
templateFooter.innerHTML = `
<link rel="stylesheet" href="../../css/footer.css" />
<footer class ="footer">
    <span>Todos os diretos reservados &copy - Leandro Safra</span>
</footer>`;

class Footer extends HTMLElement {
	shadowRoot = this.attachShadow({ mode: "closed" });
	constructor() {
		super();
		this.shadowRoot.appendChild(templateFooter.content);
	}
}

customElements.define("footer-component", Footer);
