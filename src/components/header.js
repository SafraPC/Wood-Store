const willCreateElement = (html) => {
    const element = document.createElement("div");
    element.innerHTML = html.trim();
    return element.firstChild;
}

const header = `
<div class ="nav" >
	<a href="../index.html" style="text-decoration:none">
		<div class="logo" >
			<h4>Wood-Store</h4>
		</div>
	</a>

    <div class="nav-item">
        <a class="item" href="../html/produtos.html"><div>Produtos</div></a>
        <a class="item" href="../index.html"><div>Quem Somos</div></a>
        <a class="item" href="../html/ajuda.html"><div>Ajuda</div></a>
    </div>
    <div class="nav-lr">
        <a class="item" href="/html/login.html"><div >Logar</div></a>
        <a class="item" href="/html/register.html"><div >Cadastrar</div></a>
    </div>
    <div class="burger"">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>`;


const element = willCreateElement(header);
document.getElementsByTagName("body")[0].appendChild(element);
