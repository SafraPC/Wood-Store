import "./test.js";
const iFrame = document.getElementById("iFrame");
const header = iFrame.contentWindow.document.getElementById("nav-header");
const hamburguer = iFrame.contentWindow.document.getElementById("hamburguer");

function handleOpenCloseDropDown() {
	header.classList.toggle("active");
	iFrame.style.height = "24rem";
	// if (getHeader.style.display === "none") {
	// 	getHeader.style.display = "flex";
	// 	iFrame.style.height = "24rem";
	// } else {
	// 	iFrame.style.height = "84px";
	// 	getHeader.style.display = "none";
	// }
}
hamburguer.addEventListener("click", handleOpenCloseDropDown);
// hamburguer.onClick = testeOi;
