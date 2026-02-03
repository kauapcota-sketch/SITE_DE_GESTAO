function Entrar() {

    var usuario = document.getElementById('inpusuario').value;
    var senha = document.getElementById('inpsenhas').value;
    var mensagem = document.getElementById('inpMensagem');


    if (usuario === "0" ) {
        mensagem.innerHTML = "Selecione o tipo de usuário!";
    }


    else if (usuario === "1" && senha === "123"){
        alert("Você será direcionado para a página de conta Bancario.");
        window.location.href = "vendas.html";
    }

    
    else if (usuario === "2" && senha === "456") {
        alert("Você será direcionado para a página de conta salário.");
        window.location.href = "estoque.html";
    }

  
    else if (usuario === "3" && senha === "789") {
        alert("Você será direcionado para a página de benefício aposentadoria.");
        window.location.href = "administracao.html";
    }


    else {
        mensagem.innerHTML = "Usuário ou senha inválidos!";
    }
    
}
function verificarEnter(event) {
    if (event.key === "Enter") {
        alert("você apertou enter");
        Entrar();
    }
}