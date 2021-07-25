const tBody = document.getElementById('estoque.html');


  var seu_nome = document.getElementById("Seu nome").value;
  var email = document.getElementById("E-mail").value;
  var CPF = document.getElementById("CPF").value; 
  var nome_produto = document.getElementById("E-mail").value;
  var quantidade = document.getElementById("CPF").value;

  var info = {
    seu_nome,
    email,
    CPF,
    nome_produto,
    quantidade,
}

function buscarConteudo() {
  const arr = JSON.parse(localStorage.getItem('estoque2'));

}