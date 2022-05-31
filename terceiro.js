function clicarNoBotao(){
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    alert(`Prezado ${nome}, foi enviado um E-email de confirmação contendo:\n Telefone: ${telefone}\n Usuário: ${usuario}\n Senha: ${senha}`);
};