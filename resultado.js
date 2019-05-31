window.onload = function(){

    var urlParams = new URLSearchParams(window.location.search);

    var query = urlParams.get('buscador');

    console.log(query);

    var url = "https://api.themoviedb.org/3/search/multi?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&query="+query+"&page=1&include_adult=false"

    fetch(url)
    .then(function(respond) {
      return respond.json()
    })
    .then(function(data) {
      console.log(data);
      console.log(data.results);
      var arrayDeResultados = data.results

      for (var i = 0; i < arrayDeResultados.length; i++) {
          var titulo = arrayDeResultados[i].title
          console.log(titulo);

          var poster = arrayDeResultados[i].poster_path
          console.log(poster);


          var tituloResultados = document.querySelector('.resulatadosDeBusqueda')
          var url = "https://image.tmdb.org/t/p/original/" + poster

          tituloResultados.innerHTML += "<li><p>" + titulo + "</p><p><img src=" + url  + "></p></li>"





      }

      // var arrayGeneros = data.genres
      // console.log(data.genres);

      // var generos=document.querySelector("ul.generos")
      //
      // for (var i = 0; i < 5; i++) {
      //   var name = arrayGeneros[i].name
      //
      //   generos.innerHTML += "<li>"+ name + "</li>"
      //
      //
      // }
    })
    .catch(function(error) {
      console.log("Error" + error) ;
    })



    }
