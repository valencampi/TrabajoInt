window.onload = function () {

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US")
  .then(function(respond) {
    return respond.json()
  })
  .then(function(data) {

    var arrayGeneros = data.genres
    console.log(data.genres);

    var generos = document.querySelector("ul.generos")

    for (var i = 0; i < arrayGeneros.length; i++) {
      var name = arrayGeneros[i].name
      var id = arrayGeneros[i].id

      generos.innerHTML += "<li> <a href='pelicularPorGenero.html?idgenero=" + id + "&name=" + name + "'> <p>"+ name + "</p> </a> </li>"


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


  }
