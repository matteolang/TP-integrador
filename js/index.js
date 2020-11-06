
window.addEventListener(`load`, function(){

var linkimagen = "https://image.tmdb.org/t/p/w500"
var imagenescontenedor = document.querySelector(`#container-populares`)

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.results.length; index++) {
            var results = data.results[index]
            
            console.log(`${linkimagen}${results.poster_path}`)


            imagenescontenedor.innerHTML += 
            `
            <li class="casapapel">
            <a href="movieDetail.html">
            <img src="${linkimagen}${results.poster_path}" alt="">
            </a>
            </li>
             `
        }


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    var imagenesContenedorNuevas = document.querySelector(`#container-nuevas`)

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
    
            
            for (let index = 0; index < data.results.length; index++) {
                var resultss = data.results[index]
            
                imagenesContenedorNuevas.innerHTML += 
                `
            <li class="casapapel">
            <a href="movieDetail.html">
            <img src="${linkimagen}${resultss.poster_path}" alt="">
            </a>
            </li>
             `
    
            }
            })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })

        var imagenesContenedorMejoresPuntuadas = document.querySelector(`#container-mejores-puntuadas`)

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
        
                
                for (let index = 0; index < data.results.length; index++) {
                    var resultsss = data.results[index]
                
                    imagenesContenedorMejoresPuntuadas.innerHTML += 
                    `
                <li class="casapapel">
                <a href="movieDetail.html">
                <img src="${linkimagen}${resultsss.poster_path}" alt="">
                </a>
                </li>
                 `
        
                }
                })
            .catch(function(error){
                console.log(`El error fue: ${error}`);
            })


});

