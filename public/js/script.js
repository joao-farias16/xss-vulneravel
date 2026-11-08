document.addEventListener("DOMContentLoaded", function () {
  var btnEnviar = document.getElementById("btnEnviar");
  var campo = document.getElementById("comentario");
  var lista = document.getElementById("listaComentarios");
  var n = 0;

  btnEnviar.addEventListener("click", function () {
    var texto = campo.value;

    if (texto.trim() === "") {
      alert("Digite um comentario.");
      return;
    }

    var vazia = lista.querySelector(".comments-empty");

    if (vazia) {
      lista.removeChild(vazia);
    }

    n++;

    var item = document.createElement("div");
    item.className = "comment-item";

    // LINHA VULNERAVEL: innerHTML interpreta o texto como HTML
    item.innerHTML =
      "<span class=comment-number>#" +
      n +
      "</span><div class=comment-text>" +
      texto +
      "</div>";

    lista.appendChild(item);

    campo.value = "";
    campo.focus();
  });
});