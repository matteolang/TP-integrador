window.addEventListener(`load`, function(){


var contenedorGeneros = document.querySelector(`#container-generos`)
var contenedorGenerosDos = document.querySelector(`#container-generos-dos`)

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.genres.length; index++) {
            var results = data.genres[index]
            
            
            contenedorGeneros.innerHTML += 
            `<li>
            <a href="detalle.html?tipo=genero&id=${results.id}&tipodegenero=pelicula&nombredelgenero=${results.name}"">
            <img src="" alt="">
            <div class="uk-position-center uk-panel"><h1 id="nombres-generos">${results.name}</h1></div>
            </a>
        </li>`

            
        
        }


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.genres.length; index++) {
            var results = data.genres[index]
            
            
            contenedorGenerosDos.innerHTML += 
            `<li class="uk-active">
            <a href="detalle.html?tipo=genero&id=${results.id}&tipodegenero=serie&nombredelgenero=${results.name}">
            <img src="" alt="">
            <div class="uk-position-center uk-panel"><h1 id="nombres-generos">${results.name}</h1></div>
            </a>
        </li>`

            
        
        }


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })



















})