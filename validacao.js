function validar() {
    //debugger;
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == "") {
        var valnome = document.getElementById("erronome");
        valnome.classList.remove("invisible");
        valnome.classList.add("visible");
        valnome.classList.add("errospan");
        nome.classList.add("erro");

    }else {
        nome.classList.add("correto");
        var valnome = document.getElementById("erronome");
        valnome.classList.remove("visible");
        valnome.classList.add("invisible");
    }

    if (email.value == "") {
        var valemail = document.getElementById("erroemail");
        valemail.classList.remove("invisible");
        valemail.classList.add("visible");
        valemail.classList.add("errospan");
        email.classList.add("erro");

    } else {
        email.classList.add("correto");
        var valemail = document.getElementById("erroemail");
        valemail.classList.remove("visible");
        valemail.classList.add("invisible");
    }

    if (mensagem.value == "") {
        var valmensagem = document.getElementById("erromensagem");
        valmensagem.classList.remove("invisible");
        valmensagem.classList.add("visible");
        valmensagem.classList.add("errospan");
        mensagem.classList.add("erro");

    } else {
        mensagem.classList.add("correto");
        var valmensagem = document.getElementById("erromensagem");
        valmensagem.classList.remove("visible");
        valmensagem.classList.add("invisible");
    }
}