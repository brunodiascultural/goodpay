import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";
import userLogin from "./moduloDados.js";

//Trazendo elementos do Bootstrap para uso da main Javascript.
if (window.location.pathname != "/app.html") {
    console.log(localStorage)
    var myModal = new bootstrap.Modal(document.getElementById('myModal'))
}
//Ordem para executar e validar o Login.
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById("usuario").value,
        senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user, senha);

    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.b1;
    document.getElementById("btnModalSave").innerHTML = alertModal.b2;

    myModal.show();
    setTimeout(carregarPagina, 5);
    function carregarPagina() {
        window.location.href = controleRotasApp.validaRota(localStorage.status, alertModal.idModal);
    }
});
//Ordem para criar um novo usuário.
const novoUsuario = document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click", (event) => {
    window.location.href = controleRotasApp.validaRota("false", "usuarioNaoExiste1");
});

// console.log(localStorage.email)


// if(usuario.username === usuario.email) {
//    
//}



if (window.location.pathname === "/app.html") {
    console.log(localStorage)
    var myModalApp = new bootstrap.Modal(document.getElementById('myModalApp'))
    document.getElementById("emailBadge").innerHTML = localStorage.email

    // console.log(controlerUserLogin.loginInfo())

    document.getElementById("titleModalApp").innerHTML = `Seja bem vindo, ${localStorage.userName}!`


    if (localStorage.getItem("contador") === null) {
        myModalApp.show()
        localStorage.setItem("contador", "feito")
    }

    if(!localStorage.email) {
        window.location.pathname = "/index.html";
    } 
} else {
    localStorage.clear();
}