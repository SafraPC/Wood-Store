//DEVELOPED BY LEANDRO SAFRA
//Forms for User (Login/Register ETC..)

//Getting body data
let nameText = document.getElementById("name");
let cpf = document.getElementById("cpf");
let dataNasc = document.getElementById("dataNasc");
let email = document.getElementById("email");
let password = document.getElementById("password");
let otherPassword = document.getElementById("otherPassword");

//Get all data input and verify some things
function handleFormSubmit(){
    console.log(nameText.value);
    console.log(cpf.value);
    console.log(dataNasc.value);
    console.log(email.value);
    console.log(password.value);
    console.log(otherPassword.value);
}