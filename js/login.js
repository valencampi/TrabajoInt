window.addEventListener("load",function () {

if (sessionStorage.getItem("usuario") != null) {
  document.querySelector(".logIn").style.display = "none"
  document.querySelector(".preferidas").style.display = "block"
  var usuario = document.querySelector(".nombre")
  usuario.innerHTML = sessionStorage.getItem("usuario")
}

var formulario = document.querySelector("form.uk-flex.uk-flex-column")
var nombre = formulario.querySelector("input[name = 'nombre']")
var email = formulario.querySelector("input[name = 'email']")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.onsubmit = function (event) {
  var select = formulario.querySelector("select")
  var option = select.options[select.selectedIndex]
  if (nombre.value =="" && email.value.match(mailformat)== null) {
    event.preventDefault()
    alert("Complete todos los campos")
  }else if (nombre.value == "") {
    event.preventDefault()
    alert("Falta su nombre")
  }else if (email.value.match(mailformat) == null) {
    event.preventDefault()
    alert("Falta su email")
  }else if (option.value == "") {
    event.preventDefault()
    alert("Falta su genero")
  }else {
    event.preventDefault()
    sessionStorage.setItem("usuario", nombre.value)
    document.querySelector(".logIn").style.display = "none"
    document.querySelector(".preferidas").style.display = "block"
    document.querySelector(".uk-modal-close").click()
  }
}

console.log(formulario);



})
