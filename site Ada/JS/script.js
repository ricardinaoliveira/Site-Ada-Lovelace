//if (condição for verdadeira){
    //faz ação
//}else{
    //faz outra ação
//}
document.getElementById("botao_enviar").addEventListener("click", validaformulario)
  function validaformulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome e email!")
    }
  }
