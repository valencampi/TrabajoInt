window.onload = function () {

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US")
  .then(function(respond) {
    return respond.json()
  })
  .then(function(data) {

    var arrayGeneros = data.genres
    console.log(data.genres);

    var generos = document.querySelector("ul.generos")

    for (var i = 0; i < arrayGeneros.length; i++) {
      var name = arrayGeneros[i].name
      var id = arrayGeneros[i].id

      generos.innerHTML += "<li> <a href='pelicularPorGenero.html?idgenero=" + id + "'> <p>"+ name + "</p> </a> </li>"


    }
  })
  .catch(function(error) {
    console.log("Error" + error) ;
  })

  }
