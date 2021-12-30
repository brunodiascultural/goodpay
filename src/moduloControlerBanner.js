import muda from './moduloBannerDados.js'

class ControleTextoImagemBanner{
    constructor(){
        this.imagemAtual = 0; //inicialização da classe
        this.bannerHtml = "";
    }

    //método para substituir as informações
    rotacionarBanner(){
        this.imagemAtual = (this.imagemAtual + 1) % muda.length; 
        this.bannerHtml = `
        <img src="${muda[this.imagemAtual].img}" class="card-img-top" alt="Banner Principal">
        <div class="card-body">
          <h5 class="card-title">${muda[this.imagemAtual].h5}</h5>
          <p class="card-text">
          ${muda[this.imagemAtual].p}
          </p>
          <p class="card-text"><small class="text-muted">${muda[this.imagemAtual].data}</small></p>
        </div>`
  
        document.getElementById("mudar").innerHTML = this.bannerHtml;
    }
  
    //método para indicar o tempo de troca
    indicarIntervalo(){
        setInterval(this.rotacionarBanner.bind(this), 1800);
    }
  }

  const controleTextoImagemBanner = new ControleTextoImagemBanner();
  export default controleTextoImagemBanner;
  