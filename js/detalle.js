window.addEventListener(`load`, function(){

    var linkimagen = "https://image.tmdb.org/t/p/w500"

var sectionDetalle = document.querySelector(`#sectionDetalle`)
var sectionReviews = document.querySelector(`#reviews`)



    

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`id`)
    var stringTipo = queryStringObj.get(`tipo`)
    console.log(queryStringObj.get(`id`))

 


   if (stringTipo == "pelicula") {


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


 



}) 