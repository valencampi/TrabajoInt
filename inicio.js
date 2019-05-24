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

    populares.innerHTML += "<li>"+ title + "</li>"
    populares.innerHTML += "<p>"+ overview + "</p>"


  }
})
.catch(function(error) {
  console.log("Error" + error) ;
})

}
