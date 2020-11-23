window.addEventListener(`load`,function(){













































    /*
    var botonFavs = document.querySelectorAll(`.boton-favs`)
    
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var favs =  JSON.parse(localStorage.getItem("favoritos"))

    if (favs == null) {
        favs = []
    }

    
        
        var queryString = location.search
        var queryStringObj = new URLSearchParams (queryString)
        var queryStringObjId = queryStringObj.get(`id`)
        
        favs.push(queryStringObjId)
    
        localStorage.setItem("favoritos", JSON.stringify(favs))
  
        console.log(localStorage)


  //  botonFavs.addEventListener(`click`,function () {
    //    var idClickeado = `${id}`
      //  console.log(`anda o no anda`)
        //favs.push(idClickeado)
    //})

    

   /*
    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`id`)
    var queryStringObjTipo = queryStringObj.get(`tipo`)
    

    var favs =  JSON.parse(localStorage.getItem("favoritos_id"))
    var favss = JSON.parse(localStorage.getItem("favoritos_tipo"))

    if (favs == null) {
        favs = []
    }



   favs.push(queryStringObjId)
   

   if (queryStringObjId == null) {
       favs.pop()
   }


   localStorage.setItem("favoritos_id", JSON.stringify(favs))


if (favss == null) {
    favss = []
}

favss.push(queryStringObjTipo)

if (queryStringObjTipo == `genero`) {
    favs.pop()
    favss.pop()
   }

   localStorage.setItem("favoritos_tipo", JSON.stringify(favss))

   console.log(localStorage)

    */
   /*
var contenedorFavoritos = document.querySelector(`.div-favoritos`)


// PARA PELICULAS 

for (let index = 0; index < favs.length; index++) {
    const element = favs[index];

    fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        contenedorFavoritos.innerHTML += 
        `
        <article>
        <a href="">
            <img src="${linkimagen}${data.poster_path}" alt="">
        </a>
        <button></button>
    </article>
        `

        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
}
    */
})
