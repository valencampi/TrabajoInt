window.onload = function () {

fetch("https://api.themoviedb.org/3/movie/popular?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {
  console.log(data);

  var arrayPopular = data.results
  console.log(arrayPopular);

  var populares=document.querySelector("ul.populares")

  for (var i = 0; i < 5; i++) {
    var id = arrayPopular[i].id
    var title = arrayPopular[i].title
    var overview = arrayPopular[i].overview
    var foto = arrayPopular[i].poster_path

    populares.innerHTML += "<li>"+ title + "</li>"
    populares.innerHTML += "<p>"+ overview + "</p>"
    populares.innerHTML += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
}

})
.catch(function(error) {
  console.log("Error" + error) ;
})

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {
  console.log(data);
  console.log("puntaje");

  var arrayPuntaje = data.results
  console.log(arrayPuntaje);

  var puntaje=document.querySelector("ul.puntaje")

  for (var i = 0; i < 5; i++) {
    var id = arrayPuntaje[i].id
    var title = arrayPuntaje[i].title
    var overview = arrayPuntaje[i].overview
    var foto = arrayPuntaje[i].poster_path

    puntaje.innerHTML += "<li>"+ title + "</li>"
    puntaje.innerHTML += "<p>"+ overview + "</p>"
    puntaje.innerHTML += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
}})

.catch(function(error) {
  console.log("Error" + error);
})


}
