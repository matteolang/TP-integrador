

function eliminarFav(id) {
    
    var favsPelis =  JSON.parse(localStorage.getItem("favoritos_peliculas"))
      
   var posicionDelId = favsPelis.indexOf(id)
    favsPelis.splice(posicionDelId, 1)

    localStorage.setItem("favoritos_peliculas", JSON.stringify(favsPelis))

    location.reload();
return false;
}  

function eliminarFavSerie(id) {
    var favsSeries =  JSON.parse(localStorage.getItem("favoritos_series"))
      
   var posicionDelId = favsSeries.indexOf(id)
    favsSeries.splice(posicionDelId, 1)

    localStorage.setItem("favoritos_series", JSON.stringify(favsSeries))

    location.reload();
return false;
 
}  

window.addEventListener("load",function(){

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjNombreUsuario = queryStringObj.get(`nombreusuario`)
  
    var sectionBienvenido = document.querySelector(`.bienvenido-usuario`)

    var sesionNombre = JSON.parse(sessionStorage.getItem("Nombre"))

    

    if (sesionNombre == null){
        sesionNombre = []
    }

    sesionNombre.push(queryStringObjNombreUsuario)
    sessionStorage.setItem("Nombre", JSON.stringify(sesionNombre))
    console.log(sesionNombre)

    for (let index = 0; index < sesionNombre.length; index++) {
        const element = sesionNombre[index];
        if (sesionNombre.length > 1 && element == null) {
                var posicionNull = sesionNombre.indexOf(null)
                    sesionNombre.splice(posicionNull, 1)
                    sessionStorage.setItem("Nombre", JSON.stringify(sesionNombre))
        }
    }

    if (sesionNombre.length > 1) {
        sesionNombre.splice(0, 1)
        sessionStorage.setItem("Nombre", JSON.stringify(sesionNombre))
    }

    if (sesionNombre[0] == null){
        sesionNombre = []
    }

    console.log(sessionStorage)

    sectionBienvenido.innerHTML += `<p>Bienvenid@, ${sesionNombre[0]}!</p>`

    if (sesionNombre[0] == undefined){
        sectionBienvenido.innerHTML = ``
    }

    var linkimagen = "https://image.tmdb.org/t/p/w500"
console.log(localStorage)
var tituloPelis = document.getElementById(`titulofavsPelis`)
var tituloSeries = document.getElementById(`titulofavsSeries`)
var storagePelis = localStorage.getItem(`favoritos_peliculas`)
var storageSeries = localStorage.getItem(`favoritos_series`)
var tituloFavs = document.querySelector(`.titulofavs`)
var contenedorPelis = document.getElementById(`div-favoritos-pelis`)
var contenedorSeries = document.getElementById(`div-favoritos-series`)
var favsPelis =  JSON.parse(localStorage.getItem("favoritos_peliculas"))

var favsSeries = JSON.parse(localStorage.getItem("favoritos_series"))

if (storagePelis == `[]` && storageSeries == `[]`) {
    tituloPelis.style.display = `none`;
    tituloSeries.style.display = `none`;

    tituloFavs.innerHTML = `<h2>FAVORITOS</h2><p>Aun no tienes favoritos.</p>`

}

if (storageSeries == `[]`) {
    tituloSeries.style.display = `none`;
    contenedorSeries.style.display = `none`;
}

if (storagePelis == `[]`) {
    tituloPelis.style.display = `none`;
    contenedorPelis.style.display = `none`;
}

console.log(favsPelis)

//Para peliculas marcadas como favs
for (let index = 0; index < favsPelis.length; index++) {
    const element = favsPelis[index];
    
    fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);
        
        
        contenedorPelis.innerHTML += 
        `
        <article class="article-contenedor">
    <a href="detalle.html?id=${element}&tipo=pelicula"><img src="${linkimagen}${data.poster_path}" alt=""></a>
    <button onclick="eliminarFav(${data.id})" id="${data.id}" tipo=pelicula class="boton-eliminar">Eliminar de favoritos</button>
</article>
        `

        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
    

}


for (let index = 0; index < favsSeries.length; index++) {
    const element = favsSeries[index];
    
    fetch(`https://api.themoviedb.org/3/tv/${element}?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);
        
        contenedorSeries.innerHTML += 
        `
        <article class="article-contenedor">
    <a href="detalle.html?id=${element}&tipo=serie"><img src="${linkimagen}${data.poster_path}" alt=""></a>
    <button onclick="eliminarFavSerie(${data.id})" id="${data.id}" tipo=serie class="boton-eliminar">Eliminar de favoritos</button>
</article>
        `


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

}

//

console.log(favsPelis)
  
//
});
