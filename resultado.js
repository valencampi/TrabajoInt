window.addEventListener("load",function(){

    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('buscador');

  // Que se acuerde lo que busque
    document.querySelector("#input").value = query

    var buscador = document.querySelector(".buscador1");
    buscador.onsubmit = function(e){
    resultado = document.querySelector(".resultado").value;
      if(resultado.length == 0 || resultado.length < 3){
        console.log(resultado.length);
        UIkit.notification({
            message: '<br>Ingresá más de 3 caracteres',
            status: 'danger',
            pos: 'top-right',
            timeout: 3000
        });
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
      var id = "";
      var poster = ""
      var fechaDeLanzamiento = ""
      var puntuacion = ""

      for (var i = 0; i < arrayDeResultados.length; i++) {
          console.log(arrayDeResultados[i]);

          id = arrayDeResultados[i].id

          titulo = arrayDeResultados[i].title
          console.log(titulo);

          poster = arrayDeResultados[i].poster_path
          console.log(poster);

          fechaDeLanzamiento = arrayDeResultados[i].release_date
          console.log(fechaDeLanzamiento);

          puntuacion = arrayDeResultados[i].vote_average
          console.log(puntuacion);

          if (titulo!=null && poster!=null ) {
            var tituloResultados = document.querySelector('ul.resultadosDeBusqueda')
            var url = "https://image.tmdb.org/t/p/original" + poster

            li ="<li class='liPelis' >"
              li += "<p class= 'titulos info'>" + titulo + "</p>"
              li += "<img class='imgPelis' class='info' src=" + url  + ">"
              if (fechaDeLanzamiento!= null) {
                li += "<p class='puntuacion'> <span> Lanzada el:</span> " + fechaDeLanzamiento + "</p>"
              }
              li += "<p class='puntuacion'> <span> Puntuación:</span> " + puntuacion  + "/10</p>"
            li += "</li>"

            tituloResultados.innerHTML += "<a href='peliculas.html?id=" + id + "'>"+ li + "</a>"

          }
      }

    })
    .catch(function(error) {
      console.log("Error" + error) ;
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
