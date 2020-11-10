window.addEventListener(`load`, function(){


var contenedorGeneros = document.querySelector(`#container-generos`)

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.genres.length; index++) {
            var results = data.genres[index]
            
            
            contenedorGeneros.innerHTML += 
            `<li class="ligeneros"><a href=""><p>${results.name}</p></a><div class="uk-position-center uk-panel"></div></li>`

            
        
        }


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })



















})