import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";

//Trazendo elementos do Bootstrap para uso da main Javascript.
var myModal = new bootstrap.Modal(document.getElementById('myModal'))
//inserindo texto com operação do recaptcha
var display = controlerUserLogin.numberGenerator()
document.getElementById("logyQuestion").innerHTML= `Resolva a operação: ${display[0].num01} + ${display[0].num02}`
//Ordem para executar e validar o Login.
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById("usuario").value,
        senha = document.getElementById("senha").value,
        recaptcha = document.getElementById('recaptcha').value;
    let alertModal = controlerUserLogin.loginInfo(user, senha, recaptcha);

    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.b1;
    document.getElementById("btnModalSave").innerHTML = alertModal.b2;

    myModal.show();
    if (alertModal.idModal !== "tentativasDemais1") {
        setTimeout(carregarPagina, 2000);
        function carregarPagina() {
            window.location.href = controleRotasApp.validaRota(localStorage.status, alertModal.idModal);
        }
    }
});
//Ordem para criar um novo usuário.
const novoUsuario = document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click", (event) => {
    window.location.href = controleRotasApp.validaRota("false", "usuarioNaoExiste1");
});