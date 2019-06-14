window.addEventListener("load",function(){

// trailer pelicula
var urlParams = new URLSearchParams(window.location.search);
var query = urlParams.get("id");
var url = "https://api.themoviedb.org/3/movie/"+ query + "/videos?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US"
var urlTrailer = ""

fetch(url)
  .then(function(respond) {
    return respond.json();
  })

  .then(function(data) {
    console.log(data);
    console.log(data.status_code);
      var trailer = data.results[0].key
      urlTrailer = '<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  })
  .catch(function(error) {
    console.log(error);
    return console.log("Error" + error);
  })


// detalle pelicula
var url = "https://api.themoviedb.org/3/movie/" + query + "?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US"

fetch(url)
  .then(function(respond) {
    return respond.json();
  })

  .then(function(detalle){
    console.log(detalle)

    var ul = document.querySelector("ul.detalles")
    var urlposter = "https://image.tmdb.org/t/p/original"
    var arrayGeneros = detalle.genres

    var id = detalle.id
    var titulo = detalle.title
    var idioma = detalle.original_language
    var sinopsis = detalle.overview
    var estreno = detalle.release_date
    var foto = detalle.poster_path
    var puntuacion = detalle.vote_average

  li = "<li>"
    li += "<h1 class='peli'>"+ titulo + "</h1>"
    li += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    li += "<p> <span class='underline'>Sinopsis</span>: "+ sinopsis + "</p>"
    li += "<p> <span class='underline'>Géneros</span>: "
          for (var i = 0; i < arrayGeneros.length; i++) {
            var id = arrayGeneros[i].id
            var genero = arrayGeneros[i].name
          li += genero}
      + "</p>"
    li += "<p> <span class='underline'>Idioma original:</span> "+ idioma + "</p>"
    li += "<p> <span class='underline'>Fecha de estreno:</span> "+ estreno + "</p>"
    li += "<p> <span class='underline'>Su puntuación es de :</span> "+ puntuacion + "</p>"
    li +="<h2 class='trailer'> <span class='underline trailer'>Tráiler:</span><br>"+ urlTrailer + "</br> </h2>"
  li += "</li>"

  ul.innerHTML += li

// que desaparezca la palabra trailer si no hay trailer
var iframe = document.querySelector("iframe.iframe")
  console.log(iframe);
  console.log(typeof iframe);

  if (iframe === null) {
    document.querySelector("h2.trailer").innerText = ""
  }
//

  })
  .catch(function(error) {
    return console.log("Error" + error);
  })


})
