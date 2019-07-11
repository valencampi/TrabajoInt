window.addEventListener("load",function () {

// si no hay login, no se muestra pelis favs
if (sessionStorage.getItem("usuario") != null) {
  document.querySelector(".logIn").style.display = "none"
  document.querySelector(".preferidas").style.display = "block"
  document.querySelector(".logInMq").style.display = "none"
  document.querySelector(".preferidasMq").style.display = "block"
  var usuario = document.querySelector(".nombre")
  usuario.innerHTML = sessionStorage.getItem("usuario")

}

// validacion formulario
var formulario = document.querySelector("form.uk-flex.uk-flex-column")
var nombre = formulario.querySelector("input[name = 'nombre']")
var email = formulario.querySelector("input[name = 'email']")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// para que no te deje enviarlo si faltan datos
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
    var usuario = document.querySelector(".nombre")
    usuario.innerHTML = nombre.value
  }
}

console.log(formulario);
})
