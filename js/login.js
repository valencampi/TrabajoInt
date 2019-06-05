window.addEventListener("load",function () {

var formulario = document.querySelector("form.uk-flex.uk-flex-column")
var nombre = formulario.querySelector("input[name = 'nombre']")
var email = formulario.querySelector("input[name = 'email']")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.onsubmit = function (event) {
  var select = formulario.querySelector("select")
  var option = select.options[select.selectedIndex]
  event.preventDefault()
  if (nombre.value =="" && email.value.match(mailformat)== null) {
    event.preventDefault()
    alert("Ingrese su nombre e email")
  }else if (nombre.value == "") {
    event.preventDefault()
    alert("Ingrese su nombre")
  }else if (email.value.match(mailformat) == null) {
    event.preventDefault()
    alert("Ingrese su email")
  }else if (option.value == "") {
    event.preventDefault()
    alert("Ingrese su genero")
  }else {
    event.preventDefault();
    alert("Bienvenido");
    console.log(option);
  }
}

})
