
window.addEventListener(`load`, function(){

var linkimagen = "https://image.tmdb.org/t/p/w500"
var imagenesContenedor = document.querySelector(`#container-populares`)
var imagenesCarousel = document.querySelector(`ul.uk-slideshow-items`)

//fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=c5fa76b40f5a5ea03c60140eade37d35`)
  //  .then(function(response){
    //return response.json();
    //})
    //.then(function(data){
      //  console.log(data);

        

        //for (let index = 0; index < data.results.length; index++) {
          //  var resultsuno = data.results[index]
            
            

            // imagenesCarousel.innerHTML += 
             //` <li>
               // <img id="carousel-imagenes" src="${linkimagen}${resultsuno.poster_path}" alt="" uk-cover>
            //</li>`
        //}


        //})
    //.catch(function(error){
      //  console.log(`El error fue: ${error}`);
    //})

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        for (let index = 0; index < data.results.length; index++) {
            var results = data.results[index]
            
            

            imagenesContenedor.innerHTML += 
            `
            <li class="casapapel">
            <a class="peliclickeable" href="detalle.html?id=${results.id}&tipo=pelicula">
            <img src="${linkimagen}${results.poster_path}" alt="">
            </a>
            
            </li>
             `
    
        
        }


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        

        for (let index = 0; index < data.results.length; index++) {
            var results = data.results[index]
            
            


            imagenesContenedor.innerHTML += 
            `
            <li class="casapapel">
            <a class="peliclickeable" href="detalle.html?id=${results.id}&tipo=serie">
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
            <a class="peliclickeable" href="detalle.html?id=${resultss.id}&tipo=pelicula">
            <img src="${linkimagen}${resultss.poster_path}" alt="">
            </a>
            
            </li>
             `
    
            }
            })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })

        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
    
            //hay un error aca
            for (let index = 0; index < data.results.length; index++) {
                var resultss = data.results[index]
            
                imagenesContenedorNuevas.innerHTML += 
                `
            <li class="casapapel">
            <a class="peliclickeable" href="detalle.html?id=${resultss.id}&tipo=serie">
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
                <a class="peliclickeable" href="detalle.html?id=${resultsss.id}&tipo=pelicula">
                <img src="${linkimagen}${resultsss.poster_path}" alt="">
                </a>
                
                </li>
                 `
        
                }
                })
            .catch(function(error){
                console.log(`El error fue: ${error}`);
            })

            fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
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
                <a class="peliclickeable" href="detalle.html?id=${resultsss.id}&tipo=serie">
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

