window.addEventListener("load",function () {
  window.onload = function () {
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

  //PELIS PREFERIDAS//

  var arrayPelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"))

      // function agregarFavoritos(id) {
        var boton = document.querySelector("#botonFavorito")
        console.log(boton.name);
        boton.addEventListener("click",function(){

          alert("me clickearon!")

          if (arrayPelisFavoritas == null) {
            arrayPelisFavoritas = []
            arrayPelisFavoritas.push(boton.name)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))

          }else if(arrayPelisFavoritas.indexOf(boton.name)===-1){

            arrayPelisFavoritas.push(boton.name)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))

          } else {
            console.log(arrayPelisFavoritas.indexOf(boton.name));
            arrayPelisFavoritas.splice(arrayPelisFavoritas.indexOf(boton.name),1);
            console.log(arrayPelisFavoritas)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
          }

          console.log(boton.name);
          console.log(JSON.parse(window.sessionStorage.getItem("favorita")));







})
