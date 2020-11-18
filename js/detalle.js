window.addEventListener(`load`, function(){



var sectionDetalle = document.querySelector(`#sectionDetalle`)

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)// PELICULA POPULAR
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);


        })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })


    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)// PELICULA NUEVAS
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);


        })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })


    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c5fa76b40f5a5ea03c60140eade37d35&language=en-US&page=1`)// PELICULA TOP RATED
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);


        })

    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`id`)
    var stringTipo = queryStringObj.get(`tipo`)
    console.log(queryStringObj.get(`id`))

    if (stringTipo == "pelicula") {
        sectionDetalle.innerHTML += 
        `
        <section class="section-body">
        <section>
            <article class="foto-detalle">
                <a href=""><img src="imagenes-tp-integrador/avengers-endgame.jpeg" alt=""></a>
            </article>
        </section>
        <section class="detalle">
                
                <div class="descripcion-actores">

                    <div class="titulo-pelicula">
                        <h2>AVENGERS ENDGAME</h2>
                   </div>

                   <div class="sinopsis">
                    <p>Después de que Thanos haya aniquilado a la mitad del universo, los Vengadores supervivientes deben hacer todo lo posible por deshacer tal atrocidad.</p>
                    <p>Actores: Robert Downey Jr., Chris Evans, Mark Ruffalo, etc.</p>
                    <p>Directores: Anthony Russo, Joe Russo.</p>
                    </div>

                    <div class="rating">
                        <img src="imagenes-tp-integrador/ratingestrellas-4-y-media.png" alt="">
                     </div>

                     <div class="reproducir">
                        <button type="submit"><img src="imagenes-tp-integrador/iconoplay.png" alt=""></button>
                        <a href="">Reproducir</a>
                    </div>

                </div>

             </section>
    </section>
        `
    }

    else if (stringTipo == "serie"){
        sectionDetalle.innerHTML += 
        `
        <section class="section-body">
        <section>
            <article class="foto-detalle">
                <a href=""><img src="imagenes-tp-integrador/peaky-blinders.jpg" alt=""></a>
            </article>
        </section>
        <section class="detalle">
                
                <div class="descripcion-actores">

                    <div class="titulo-pelicula">
                        <h2>PEAKY BLINDERS</h2>
                   </div>

                   <div class="sinopsis">
                    <p>Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los asuntos ilegales, que dominan las apuestas clandestinas y se rigen mediante extorsiones.</p>
                    <p>Actores: Finn Cole, Cillian Murphy, Paul Anderson, Helen McCroy, Sophie Rundle, Joe Cole, etc.</p>
                    <p>Directores: Tim Mielants, David Caffrey. </p>
                    </div>

                    <div class="rating">
                        <img src="imagenes-tp-integrador/ratingestrellas-4-y-media.png" alt="">
                     </div>

                     <div class="temporadas-capitulos">
                         <div class="temporadas">
                             <a href="" class="texto">Temporadas</a>
                             <a href="" class="imagen"><img src="imagenes-tp-integrador/flecha-abajo.png" alt=""></a>
                         </div>
                         <div class="capitulos">
                                <a href="" class="texto">Capitulos</a>
                                <a href="" class="imagen"><img src="imagenes-tp-integrador/flecha-abajo.png" alt=""></a>
                         </div>
                     </div>

                     <div class="reproducir">
                        <button type="submit"><img src="imagenes-tp-integrador/iconoplay.png" alt=""></button>
                        <a href="">Reproducir</a>
                    </div>

                </div>

             </section>
    </section>
        `

    }






}) // no borrar