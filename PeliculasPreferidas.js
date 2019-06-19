window.addEventListener("load",function () {

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

var arrayPeliculas= JSON.parse(window.sessionStorage.getItem("favorita"))
console.log(arrayPeliculas);
for (var i = 0; i < arrayPeliculas.length; i++) {

  var id = arrayPeliculas[i]
  var urlDeId = "https://api.themoviedb.org/3/movie/" + id + "?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US"

  fetch(urlDeId)
  .then(function(respond) {
    return respond.json()
  })
  .then(function(id){
      var ul = document.querySelector("section ul")

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
      li+= "<a href= ''> </a> "
      li+= "<h2>"+titulo+"</h2>"
      li += "<a href='peliculas.html?id='"+ id +"'>"
      li += "<img class='imgPelis' class='info' src=" + url  + ">"
      li += "</a>"

      if (fechaDeLanzamiento!= null) {
        li += "<p class='puntuacion'> <span> Lanzada el:</span> " + fechaDeLanzamiento + "</p>"
      }
      li += "<p class='puntuacion'> <span> Puntuación:</span> " + puntuacion  + "/10</p>"
    li += "</li>"

    ul.innerHTML += li



  })
  .catch(function(error) {
    console.log("Error" + error) ;
  })






}






})
//function agregarFavoritos//

function agregarFavoritos(id){

  // trailer pelicula
  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get("id");

  //PELIS PREFERIDAS//

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
    document.querySelector(".estrellita").style.backgroundColor = "transparent"
  }

  console.log(id);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

}
