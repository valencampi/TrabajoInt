window.addEventListener("load",function () {


var arrayPeliculas= JSON.parse(window.sessionStorage.getItem("favorita"))
console.log(arrayPeliculas);
for (var i = 0; i < arrayPeliculas.length; i++) {
console.log(arrayPeliculas[i]);
  var id = arrayPeliculas[i]
  var urlDeId = "https://api.themoviedb.org/3/movie/" + id + "?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US"

  fetch(urlDeId)
  .then(function(respond) {
    return respond.json()
  })
  .then(function(id){
      var ul = document.querySelector("section ul.ula")

      titulo = id.title
      console.log(titulo);

      poster = id.poster_path
      console.log(poster);
      var url = "https://image.tmdb.org/t/p/original" + poster
      fechaDeLanzamiento = id.release_date
      console.log(fechaDeLanzamiento);

      puntuacion = id.vote_average
      console.log(puntuacion);

      var url = "https://image.tmdb.org/t/p/original" + poster
      var li;
      li= "<li class= 'liPelis'>"
      li+= "<p class='titulos'>"+titulo+"</h2>"
      li += "<a href='peliculas.html?id=" + id.id + "'>"
      li += "<img class='imgPelis' class='info' src=" + url  + ">"
      li += "</a>"
      li += "</li>"
    ul.innerHTML += li


  })
  .catch(function(error) {
    console.log("Error" + error) ;
  })


}
})



//Agregar a favoritos//

function agregarFavoritos(id){

  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get("id");

  var arrayPelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"))

  if (arrayPelisFavoritas== null){

  } else if(arrayPelisFavoritas.indexOf(query)===-1){

  } else {
    document.querySelector(".estrellita").style.backgroundColor = "gold"
  }

  if (arrayPelisFavoritas == null) {
    arrayPelisFavoritas= []
    arrayPelisFavoritas.push(id)
    window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))

  }else if (arrayPelisFavoritas.indexOf(id)===-1) {
    arrayPelisFavoritas.push(id)
    window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
    document.querySelector(".estrellita").style.backgroundColor = "gold"

  }else {
    console.log(arrayPelisFavoritas);
    arrayPelisFavoritas.splice(arrayPelisFavoritas.indexOf(id),1);
    console.log(arrayPelisFavoritas);
    window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
    document.querySelector(".estrellita").style.backgroundColor = "white"
  }

  console.log(id);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

}
