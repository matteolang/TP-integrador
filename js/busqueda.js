window.addEventListener("load", function() {
    
    var loader = document.getElementById(`loader`)

    loader.style.display = `none`;
    

    var linkimagen = "https://image.tmdb.org/t/p/w500"
    var loBuscado = document.querySelector(`barrabusqueda`)

    var sectionResultadosPelis = document.getElementById(`contenedores-peliculas`)
    var sectionResultadosSeries = document.getElementById(`resultados-series`)
    var sectionResultadosPelisI = document.getElementById(`resultados-peliculas`)
    var sectionResultadosSeriesI = document.getElementById(`contenedores-series`)
    var contenedorTituloPelis = document.getElementById(`contenedorTituloPelis`)
    var contenedorTituloSeries = document.getElementById(`contenedorTituloSeries`)

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjBarraBusqueda = queryStringObj.get(`barrabusqueda`)
    var queryStringObjTipoPeliculas = queryStringObj.get(`tipoPeliculas`)
    var queryStringObjTipoSeries = queryStringObj.get(`tipoSeries`)
    
    console.log(queryString)

   

    

    if (queryStringObjTipoPeliculas == `peliculas`) {
        //sectionResultadosSeries.style.display = "none";

        contenedorTituloPelis.innerHTML += `
        <h2>PELICULAS</h2>
        `

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
     console.log(data);

     for (let index = 0; index < data.results.length; index++) {
         const element = data.results[index];

         sectionResultadosPelis.innerHTML += 
         `
         <article class="article-peli">
         <a href="detalle.html?id=${element.id}&tipo=pelicula">
    <img src="${linkimagen}${element.poster_path}" alt="">
    <h2>${element.title}</h2>
    </a>
</article>
         `

         var linkPosterPath = `${linkimagen}${element.poster_path}`
         
         //(CONDICIONAL PARA QUE LAS IMAGENES QUE NO EXISTEN SE VEA ALGO BLANCO ALMENOS)
         /*if (linkPosterPath == `https://image.tmdb.org/t/p/w500null`) {
            sectionResultadosPelis.innerHTML = 
            `
            <article class="article-peli">
            <a href="detalle.html?id=${element.id}&tipo=pelicula">
            <img src="imagenes-tp-integrador/portada-blanca.jpg" alt="">
       <h2>${element.title}</h2>
       </a>
   </article>
            `
         }*/
         
     }

        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    }

     if (queryStringObjTipoSeries == `series` ) {
       // sectionResultadosPelisI.style.display = "none";

       contenedorTituloSeries.innerHTML += `
       <h2>SERIES</h2>
       `

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
            return response.json();
            })
        .then(function(data){
             console.log(data);

             for (let index = 0; index < data.results.length; index++) {
                 const element = data.results[index];
                 
                 sectionResultadosSeriesI.innerHTML += 
         `
         <article class="article-peli">
         <a href="detalle.html?id=${element.id}&tipo=serie">
    <img src="${linkimagen}${element.poster_path}" alt="">
    <h2>${element.name}</h2>
    </a>
</article>
         `

         var linkPosterPath = `${linkimagen}${element.poster_path}`
         
         //(CONDICIONAL PARA QUE LAS IMAGENES QUE NO EXISTEN SE VEA ALGO BLANCO ALMENOS)
         /*if (linkPosterPath == `https://image.tmdb.org/t/p/w500null`) {
            sectionResultadosSeriesI.innerHTML = 
            `
            <article class="article-peli">
            <a href="detalle.html?id=${element.id}&tipo=serie">
            <img src="imagenes-tp-integrador/portada-blanca.jpg" alt="">
       <h2>${element.name}</h2>
       </a>
   </article>
            `
         }*/

  }

        })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })

    }


/*
     if (queryString == `?tipoSeries=series&tipoPeliculas=peliculas&barrabusqueda=${queryStringObjBarraBusqueda}`) {
        


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
        return response.json();
        })
        .then(function(data){
         console.log(data);
    
         for (let index = 0; index < data.results.length; index++) {
             const element = data.results[index];
    
             sectionResultadosPelis.innerHTML += 
             `
             <article class="article-peli">
             <a href="detalle.html?id=${element.id}&tipo=pelicula">
        <img src="${linkimagen}${element.poster_path}" alt="">
        <h2>${element.title}</h2>
        </a>
    </article>
             `
    
            // var linkPosterPath = `${linkimagen}${element.poster_path}`
             
             //(CONDICIONAL PARA QUE LAS IMAGENES QUE NO EXISTEN SE VEA ALGO BLANCO ALMENOS)
             /*if (linkPosterPath == `https://image.tmdb.org/t/p/w500null`) {
                sectionResultadosPelis.innerHTML = 
                `
                <article class="article-peli">
                <a href="detalle.html?id=${element.id}&tipo=pelicula">
                <img src="imagenes-tp-integrador/portada-blanca.jpg" alt="">
           <h2>${element.title}</h2>
           </a>
       </article>
                `
             }*/

             /*
             
         }
    
            })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })
    
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
        .then(function(response){
            return response.json();
            })
        .then(function(data){
             console.log(data);
    
             for (let index = 0; index < data.results.length; index++) {
                 const element = data.results[index];
                 
                 sectionResultadosSeriesI.innerHTML += 
         `
         <article class="article-peli">
         <a href="detalle.html?id=${element.id}&tipo=serie">
    <img src="${linkimagen}${element.poster_path}" alt="">
    <h2>${element.name}</h2>
    </a>
    </article>
         `
    
         var linkPosterPath = `${linkimagen}${element.poster_path}`
         
         //(CONDICIONAL PARA QUE LAS IMAGENES QUE NO EXISTEN SE VEA ALGO BLANCO ALMENOS)
         /*if (linkPosterPath == `https://image.tmdb.org/t/p/w500null`) {
            sectionResultadosSeriesI.innerHTML = 
            `
            <article class="article-peli">
            <a href="detalle.html?id=${element.id}&tipo=serie">
            <img src="imagenes-tp-integrador/portada-blanca.jpg" alt="">
       <h2>${element.name}</h2>
       </a>
    </article>
            `
         }*/
         /*
    
        }
    
        })
        .catch(function(error){
            console.log(`El error fue: ${error}`);
        })

    }
*/
    if (queryStringObjTipoPeliculas == null && queryStringObjTipoSeries == null){

        contenedorTituloPelis.innerHTML += `
        <h2>PELICULAS</h2>
        `

     fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
     console.log(data);

     for (let index = 0; index < data.results.length; index++) {
         const element = data.results[index];

         sectionResultadosPelis.innerHTML += 
         `
         <article class="article-peli">
         <a href="detalle.html?id=${element.id}&tipo=pelicula">
    <img src="${linkimagen}${element.poster_path}" alt="">
    <h2>${element.title}</h2>
    </a>
</article>
         `

         var linkPosterPath = `${linkimagen}${element.poster_path}`
         
         //(CONDICIONAL PARA QUE LAS IMAGENES QUE NO EXISTEN SE VEA ALGO BLANCO ALMENOS)
         /*if (linkPosterPath == `https://image.tmdb.org/t/p/w500null`) {
            sectionResultadosPelis.innerHTML = 
            `
            <article class="article-peli">
            <a href="detalle.html?id=${element.id}&tipo=pelicula">
            <img src="imagenes-tp-integrador/portada-blanca.jpg" alt="">
       <h2>${element.title}</h2>
       </a>
   </article>
            `
         }*/
         
     }

        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    contenedorTituloSeries.innerHTML += `
       <h2>SERIES</h2>
       `

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&query=${queryStringObjBarraBusqueda}&page=1&include_adult=false`)
    .then(function(response){
        return response.json();
        })
    .then(function(data){
         console.log(data);

         for (let index = 0; index < data.results.length; index++) {
             const element = data.results[index];
             
             sectionResultadosSeriesI.innerHTML += 
     `
     <article class="article-peli">
     <a href="detalle.html?id=${element.id}&tipo=serie">
<img src="${linkimagen}${element.poster_path}" alt="">
<h2>${element.name}</h2>
</a>
</article>
     `

     var linkPosterPath = `${linkimagen}${element.poster_path}`
     
     //(CONDICIONAL PARA QUE LAS IMAGENES QUE NO EXISTEN SE VEA ALGO BLANCO ALMENOS)
     /*if (linkPosterPath == `https://image.tmdb.org/t/p/w500null`) {
        sectionResultadosSeriesI.innerHTML = 
        `
        <article class="article-peli">
        <a href="detalle.html?id=${element.id}&tipo=serie">
        <img src="imagenes-tp-integrador/portada-blanca.jpg" alt="">
   <h2>${element.name}</h2>
   </a>
</article>
        `
     }*/

}

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })



    }





})