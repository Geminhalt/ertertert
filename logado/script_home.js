let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Fala tu, "+usuario.login
function voltar(){
    window.location.href = "../index.html"
}