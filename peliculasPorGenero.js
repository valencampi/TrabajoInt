// window.addEventListener("load",function () {
//   var buscaador = location.search
//   buscaador = new URLSearchParams(buscaador)
//
//   var id = buscaador.get("id")
//   var genero = buscaador.get("nombreGenero")
//   document.querySelector("#genero")
//
//   fetch("https://api.themoviedb.org/3/discover/movie?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id)
//   .then(function(e) {
//     return e.json()
//
//   })
//   .then(function(data) {
//     var peli = data.results
//     console.log(peli);
//
//     for (var i = 0; i < peli.length; i++) {
//       console.log(peli);
//
//       var ul = document.querySelector("ul.peliculasPorGenero")
//       ul.innerHTML += '<li></li>'
//     }
//
//
//   })
//   }











}
