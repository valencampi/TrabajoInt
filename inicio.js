window.onload = function () {

// header
var inicio = document.querySelector ("button.button")
inicio.onclick = function () {
  var Login = {
    nombre: (""),
    genero: (""),
    email: (""),
  }
  Login.nombre = prompt ("Ingrese su nombre")
  Login.email = prompt ("Ingrese su email" + <input type='email' name='correo' id='correo' pattern=''^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$' required/>)
  Login.genero = prompt ("Ingrese su genero")
  console.log(Login);
}

// if (= true) {
//   var desaparecer = document.querySelector("button.button")
//   desaparecer.style.display="none"
// }
//   else {
//   var quedar = document.querySelector("button.button")
//   quedar.style.display = "block"
// }

// buscador



// peliculas mas populares
fetch("https://api.themoviedb.org/3/movie/popular?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {
  // console.log(data);

  var cantidadDePelis = 6;

  var arrayPopular = data.results
  // console.log(arrayPopular);

  var populares=document.querySelector("ul.populares")

  var li = ""
  var thumbnail =document.querySelector("div.row")
  var div = ""

  for (var i = 0; i < cantidadDePelis; i++) {
    var id= arrayPopular[i].id
    var title = arrayPopular[i].title
    var foto = arrayPopular[i].poster_path

    if (i === 0) {
      li = "<li class='mySlides' style='display:block;height:100%;'>"
    }else {
      li = "<li class='mySlides'>"
    }

      li += "<div class='numbertext'>" +(i+1) + "/" +cantidadDePelis+ " <div/>"
      li += "<p class='opacidad'>"+ title + "</p>"
      li += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    li += "</li>"

    populares.innerHTML += li

    div = "<div class='column'>"
      div += "<img class='demo cursor' style='width:100%' onclick='currentSlide(1)' src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    div += "</div>"

    thumbnail.innerHTML += div
}

})
.catch(function(error) {
  console.log("Error" + error) ;
})

// peliculas con mayor puntaje
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {
  // console.log(data);
  // console.log("puntaje");

  var cantidadDePelis = 6;

  var arrayPuntaje = data.results
  // console.log(arrayPuntaje);

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

    puntaje.innerHTML += li

    div = "<div class='column1'>"
      div += "<img class='demo1 cursor' style='width:100%' onclick='currentSlide1(1)' src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
    div += "</div>"

    thumbnail.innerHTML += div
    // puntaje.innerHTML += "<li>"+ title + "</li>"
    // puntaje.innerHTML += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
}
})
.catch(function(error) {
  console.log("Error" + error);
})

// proximos estrenos
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1s")
.then(function(respond) {
  return respond.json()
})
.then(function(data) {
  // console.log(data);
  // console.log("estrenos");

  var cantidadDePelis = 6;

  var arrayEstrenos = data.results
  // console.log(arrayEstrenos);

  var estrenos = document.querySelector("ul.estrenos")
  var li = ""
  var thumbnail =document.querySelector("div.row2")
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

  estrenos.innerHTML += li

  div = "<div class='column2'>"
    div += "<img class="+'demo2 cursor'+" style="+'width:100%'+" onclick="+'currentSlide2(1)'+" src="+'https://image.tmdb.org/t/p/w500/'+ foto + ">"
  div += "</div>"

  thumbnail.innerHTML += div
}
})
.catch(function(error) {
  return console.log("Error" + error);
})


/*LogIn*/
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}


}

/*Busqueda*/

 fetch("https://api.themoviedb.org/3/search/movie?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1&include_adult=false")
 .then(function(respond) {
   return respond.json()
 })

 // then(function(data) {
 //
 //   console.log(data);
 //   console.log("busqueda");
 //
 //   var arrayDeBusqueda = data.results
 //   console.log(arrayDeBusqueda);
 //
 //   for (var i = 0; i < 5; i++){
 //   var title = arrayDeBusqueda[i].title
 //   var foto = arrayDeBusqueda[i].poster_path
 //
 //   estrenos.innerHTML += "<ul>" + title + "</ul>"
 //   estrenos.innerHTML += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
 //
 // }
 // )
 //
 // .catch(function(error) {
 //   return console.log("Error" + error);
 // })
