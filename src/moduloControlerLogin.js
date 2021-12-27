import userLogin from "./moduloDados.js";
import comunicacaoModal from "./moduloComunicacaoDados.js";

class ControlerUserLogin {
    constructor(status) {
        this.status = status;
        this.attempts = 0; //Tentativas de login
        this.resultReference = 0; //Resultado da operação do recaptcha
    }
    checkLogin() {
        this.status = true;
    }
    checkOutLogin() {
        this.status = false;
    }
    loginInfo(user, senha, recaptcha) {
        localStorage.clear();
        let infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        if (user === null || senha === null || user === "" || senha === "" || recaptcha === null || recaptcha === "") {
            this.checkOutLogin();
            localStorage.status = this.status;
            return comunicacaoModal.find(i => i.idModal === "camposVazios1");
        } else if (!infoCheck) {
            this.checkOutLogin();
            localStorage.status = this.status;
            return comunicacaoModal.find(i => i.idModal === "usuarioNaoExiste1");
        } else {
            if (infoCheck.senha === senha && recaptcha == this.resultReference) { //Senha e recaptcha precisam estar corretos
                this.checkLogin();
                localStorage.status = this.status;
                localStorage.email = infoCheck.email;
                localStorage.userName = infoCheck.username;

                return comunicacaoModal.find(i => i.idModal === "loginExecutado1");
            } else {
                this.attempts++;
                if (this.attempts !== 3) { //Máximo de tentativas
                    this.checkOutLogin();
                    localStorage.status = this.status;
                    let tentativasObject = comunicacaoModal.find(i => i.idModal === "tentativasDemais1");
                    //Passando o resto das tentativas para o usuário
                    tentativasObject.bodyModal = `Você já fez ${this.attempts} tentativa(s)! Com três será redirecionado(a) para recuperar senha`;
                    return tentativasObject;
                } else {
                    this.attempts = 0;
                    this.checkOutLogin();
                    localStorage.status = this.status;
                    return comunicacaoModal.find(i => i.idModal === "falhaLogin1");
                }
            }
        }
    }
    numberGenerator() { //gerador de números aleatorios para recaptcha
        let logicalOperator1 = Math.floor(Math.random() * 300);
        let logicalOperator2 = Math.floor(Math.random() * 10);
        let result = [{
            num01: logicalOperator1,
            num02: logicalOperator2,
            sum: logicalOperator1 + logicalOperator2
        }
        ];
        this.resultReference = result[0].sum;
        return result;
    }
}

const controlerUserLogin = new ControlerUserLogin();
export default controlerUserLogin