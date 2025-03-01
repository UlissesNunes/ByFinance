export default class ByFinance {
  #isenha

    constructor(iemail , isenha) {
        this._iemail = iemail
        this.#isenha = isenha
       
    }

    getIsenha() {
        return this.#isenha
    }

    logar() {
        if(this._iemail === "ulissesnunesx@gmail.com" && this.getIsenha() === "Ulimar15") {
            window.open ("./Home/bfgHome.html" )
        } else {
        alert(" [ERRO] Senha ou email inválidos")
    }
}
}