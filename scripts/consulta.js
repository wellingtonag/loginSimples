function Login() {
  var done = 0;
  var usuario = document.getElementsByName("usuario")[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName("senha")[0].value;
  senha = senha.toLowerCase();
  if (usuario == "" && senha == "") {
    alert("Preenchimento obrigatório");
    return false;
  }
  if (usuario == "admin" && senha == "admin") {
    //window.location = "index.html"; # para abrir na página de acesso
    alert("Acesso autorizado!");
    done = 1;
  }
  if (done == 0) {
    alert("Dados incorretos, tente novamente");
  }
}
