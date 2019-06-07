window.onload = function(){

    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('buscador');


    var buscador = document.querySelector(".buscador1");
    buscador.onsubmit = function(e){
      resultado = document.querySelector(".resultado").value;
      if(resultado.length == 0 || resultado.length < 3){
        console.log(resultado.length);
        alert("+ter ingresa mas de 3 letras")
        e.preventDefault();
      }
    }

    var url = "https://api.themoviedb.org/3/search/multi?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&query="+query+"&page=1&include_adult=false"

    fetch(url)
    .then(function(respond) {
      return respond.json()
    })
    .then(function(data) {
      console.log(data);
      console.log(data.results);
      var arrayDeResultados = data.results
      console.log(arrayDeResultados);
      console.log(arrayDeResultados.length);
      var li = "";
      for (var i = 0; i < arrayDeResultados.length; i++) {
          console.log(arrayDeResultados[i]);

          var titulo = arrayDeResultados[i].title
          console.log(titulo);

          var poster = arrayDeResultados[i].poster_path
          console.log(poster);

          var fechaDeLanzamiento = arrayDeResultados[i].release_date
          console.log(fechaDeLanzamiento);

          var puntuacion = arrayDeResultados[i].vote_average
          console.log(puntuacion);

          if (titulo!=null && poster!=null ) {
            var tituloResultados = document.querySelector('ul.resultadosDeBusqueda')
            var url = "https://image.tmdb.org/t/p/original" + poster

            li ="<li class='liPelis' >"
            li +="<a href='peliculas.html'>"
              li += "<p class= 'titulos info'>" + titulo + "</p>"
              li += "<img class='imgPelis' class='info' src=" + url  + ">"
              if (fechaDeLanzamiento!= null) {
                li += "<p class='puntuacion'> Lanzada el: " + fechaDeLanzamiento + "</p>"
              }
              li += "<p class='puntuacion'> Su puntuacion es: " + puntuacion  + "/10</p>"
            li +="</a>"
            li += "</li>"

            tituloResultados.innerHTML += li

          }
      }

    })
    .catch(function(error) {
      console.log("Error" + error) ;
    })

}
