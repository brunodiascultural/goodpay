import rotaApp from "./moduloRotas.js";

class ControleRotasApp{
    constructor(status, idRota, tela, linkUrl){
        this.status = status;
        this.idRota = idRota;
        this.tela = tela;
        this.linkUrl = linkUrl;
    }
    validaRota(status, idRota){
        //Ao receber tentativasDemais1 redireciona para o mesma página de falhaLogin1
        if(idRota === "tentativasDemais1") idRota = "falhaLogin1";
        if(status === "true"){
            return (rotaApp.find(i=>i.idRota === idRota).linkUrl);
        } else {
            return (rotaApp.find(i=>i.idRota === idRota).linkUrl);
        }
    }
}

const controleRotasApp = new ControleRotasApp();
export default controleRotasApp;