window.addEventListener("load",function () {


// Peliculas mas populares
fetch("https://api.themoviedb.org/3/movie/popular?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {

  var cantidadDePelis = 6;

  var arrayPopular = data.results

  var populares=document.querySelector("ul.populares")

  var li = ""
  var thumbnail =document.querySelector("div.row")
  var div = ""

  for (var i = 0; i < cantidadDePelis; i++) {
// un ciclo para que se repita
// i = index, si lo vemos en console.log marca un numero
// var i = 0: inicia el ciclo
// i < : limite de repeticiones
// i++: incrementacion de los ciclos
    var id= arrayPopular[i].id
    var title = arrayPopular[i].title
    var foto = arrayPopular[i].poster_path

    if (i === 0) {
      li = "<li class='mySlides' style='display:block;height:100%;'>"
    }else {
    li = "<li class='mySlides'>"}
      li += "<div class='numbertext'>" +(i+1) + "/" +cantidadDePelis+ " <div/>"
      li += "<p class='opacidad'>"+ title + "</p>"

      li += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    li += "</li>"

    populares.innerHTML += "<a href='peliculas.html?id=" + id + "'>"+ li + "</a>"

    div = "<div class='column'>"
      div += "<img class='demo cursor' style='width:100%' onclick='currentSlide(" + (i+1) + ")' src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    div += "</div>"

    thumbnail.innerHTML += div
}

})
.catch(function(error) {
  console.log("Error" + error) ;
})


// Peliculas con mayor puntaje
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {

  var cantidadDePelis = 6;

  var arrayPuntaje = data.results

  var puntaje=document.querySelector("ul.puntaje")
  var li = ""
  var thumbnail =document.querySelector("div.row1")
  var div = ""

  for (var i = 0; i < 6; i++) {
    var id = arrayPuntaje[i].id;
    var title = arrayPuntaje[i].title;
    var foto = arrayPuntaje[i].poster_path;

    if (i === 0) {
      li = "<li class='mySlides1' style='display:block;height:100%;'>"
    }else {
      li = "<li class='mySlides1'>"
    }
      li += "<div class='numbertext1'>" +(i+1) + "/" +cantidadDePelis+ " <div/>"
      li += "<p class='opacidad'>"+ title + "</p>"

      li += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    li += "</li>"

    puntaje.innerHTML += "<a href='peliculas.html?id=" + id + "'>"+ li + "</a>"

    div = "<div class='column1'>"
      div += "<img class='demo1 cursor' style='width:100%' onclick='currentSlide1(" + (i+1) + ")' src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    div += "</div>"

    thumbnail.innerHTML += div
}

})
.catch(function(error) {
  console.log("Error" + error);
})

// Proximos estrenos
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1s")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {

  var cantidadDePelis = 6;

  var arrayEstrenos = data.results

  var estrenos = document.querySelector("ul.estrenos")
  var li = ""
  var thumbnail = document.querySelector("div.row2")
  var div = ""

  for (var i = 0; i < 6; i++){
  var id = arrayEstrenos[i].id
  var title = arrayEstrenos[i].title
  var foto = arrayEstrenos[i].poster_path

  if (i === 0) {
    li = "<li class='mySlides2' style='display:block;height:100%;'>"
  }else {
    li = "<li class='mySlides2'>"
  }

    li += "<div class='numbertext2'>" +(i+1) + "/" +cantidadDePelis+ " <div/>"
    li += "<p class='opacidad'>"+ title + "</p>"

    li += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
  li += "</li>"

  estrenos.innerHTML += "<a href='peliculas.html?id=" + id + "'>"+ li + "</a>"

  div = "<div class='column2'>"
    div += "<img class="+'demo2 cursor'+" style="+'width:100%'+" onclick='currentSlide2(" + (i+1) + ")' src="+'https://image.tmdb.org/t/p/w500/'+ foto + ">"
  div += "</div>"

  thumbnail.innerHTML += div
}
})
.catch(function(error) {
  return console.log("Error" + error);
})


  //media query event handler
  if(matchMedia){
      const mq = window.matchMedia( "(max-width:768px)" );//sets the width you want
      mq.addListener(WidthChange);
      WidthChange(mq)
  }

  function WidthChange(mq){
      if(mq.matches){
          //if window width is less than or equal to 768px;
          $("#navbar_toggle").removeClass("dis-none"); //makes toggler visible
          $("#navbar_collapse").addClass("dis-none");//makes the menu not visible initially
          //so you can only see the menu items when you click the toggler

          $("#navbar_toggle").on('click', function(e){
              $("#navbar_collapse").slideToggle();
              $("#navbar_collapse").css({"display": "block"});
          })
      }else{
          //for larger screens
          $("#navbar_toggle").addClass('dis-none');
          $("#navbar_collapse").removeClass('dis-none');
      }
  }



})
