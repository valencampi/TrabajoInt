window.onload = function () {

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US")
  .then(function(respond) {
    return respond.json()
  })
  .then(function(data) {

    var arrayGeneros = data.genres
    console.log(data.genres);

    var generos=document.querySelector("ul.generos")

    for (var i = 0; i < 5; i++) {
      var name = arrayGeneros[i].name

      generos.innerHTML += "<li>"+ name + "</li>"


    }
  })
  .catch(function(error) {
    console.log("Error" + error) ;
  })

  }

  /*header*/
  var inicio = document.querySelector ("button.button")
  inicio.onclick = function () {
    var Login = {
      nombre: (""),
      genero: (""),
      email: (""),
    }
    Login.nombre = prompt ("Ingrese su nombre")
    Login.email = prompt ("Ingrese su email")
    Login.genero = prompt ("Ingrese su genero")
    console.log(Login);
  }

  /*header*/
  
