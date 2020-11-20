window.addEventListener(`load`, function(){

    var linkimagen = "https://image.tmdb.org/t/p/w500"

var sectionDetalle = document.querySelector(`#sectionDetalle`)
var sectionReviews = document.querySelector(`#reviews`)
var carousel = document.querySelector(`.divcarousel`)
var tituloCarousel = document.querySelector(`.titulocarousel`)

    

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`id`)
    var stringTipo = queryStringObj.get(`tipo`)
    var generoTipo = queryStringObj.get(`tipodegenero`)
    console.log(queryStringObj.get(`id`))
    var nombreGenero = queryStringObj.get(`nombredelgenero`)

 


   if (stringTipo == "pelicula") {


    carousel.innerHTML = ``
    

    fetch(`https://api.themoviedb.org/3/movie/${queryStringObjId}?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);


        sectionDetalle.innerHTML += 
        `<section class="foto-detalle">
        <img src="${linkimagen}${data.poster_path}" alt="">
    </section>
    <section class="section-sinopsis">
        <div class="titulo">
            <h2>${data.title}</h2>
        </div>
        <div class="sinopsis">
            <p>${data.overview}</p>
        </div>
        <div>
        <p id="promediovotos">Promedio de votos: ${data.vote_average}</p>
        </div>
        <div class="reproducir">
        <button type="submit"><img src="imagenes-tp-integrador/iconoplay.png" alt=""></button>
            <a href="">Reproducir</a>
        </div>
    </section>`
    
    

        })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    fetch(`https://api.themoviedb.org/3/movie/${queryStringObjId}/reviews?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        sectionReviews.innerHTML += 
        `<div class="tituloreviews">
        <h2>Reviews</h2>
        </div>
        <div class="reviewautor">
        <p>Autor: "${data.results[0].author}"</p>
        </div>
        <p>"${data.results[0].content}"</p>`
    

        })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
 

        
    }

    else if (stringTipo == "serie"){


        carousel.innerHTML = ``


        fetch(`https://api.themoviedb.org/3/tv/${queryStringObjId}?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);

        sectionDetalle.innerHTML += 
        `
        <section class="foto-detalle">
        <img src="${linkimagen}${data.poster_path}" alt="">
    </section>
    <section class="section-sinopsis">
        <div class="titulo">
            <h2>${data.name}</h2>
        </div>
        <div class="sinopsis">
            <p>${data.overview}</p>
        </div>
        <div class="nombregenero">
        <p>Genero:</p>
        <a href="">${data.genres[0].name}</a>
        </div>
        <div class="fechasalida">
        <p>Fecha de salida: ${data.first_air_date}</p>
        </div>
        <div class="reproducir">
        <button type="submit"><img src="imagenes-tp-integrador/iconoplay.png" alt=""></button>
            <a href="">Reproducir</a>
        </div>
    </section>
        `


        })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
        
    } 
    else if (stringTipo == "genero"){



        if (generoTipo == "pelicula"){
        
                
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${queryStringObjId}`)
        .then(function(response){
        return response.json();
        })
        .then(function(data){
            console.log(data);

            tituloCarousel.innerHTML += `
            <div class="titulogenero">
            <h2>
            ${nombreGenero}
            </h2>
            </div
                    `
    
            for (let index = 0; index < 10; index++) {
                var resultados = data.results[index];
            
            carousel.innerHTML += 
            `
            <article class="article-div">
            <a href="">
            <img src="${linkimagen}${resultados.poster_path}" alt="">
            </a>
            </article>
             `
            }
    
            })
    
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })
    }
    else if (generoTipo == "serie"){

              

        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${queryStringObjId}`)
        .then(function(response){
        return response.json();
        })
        .then(function(data){
            console.log(data);

            tituloCarousel.innerHTML += `
                <div class="titulogenero">
                <h2>
                ${nombreGenero}
                </h2>
                </div>
                `

            for (let index = 0; index < 10; index++) {
                var resultados = data.results[index];
                
        

                carousel.innerHTML += 
            `
            <article class="article-div">
            <a href="">
            <img src="${linkimagen}${resultados.poster_path}" alt="">
            </a>
            </article>
             `

            }
           

                
    
    
            })
    
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })
    }
    }



}) 