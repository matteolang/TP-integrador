
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
            <li>
            <a href="movieDetail.html">
            <img id="casapapel" src="${linkimagen}${results.poster_path}" alt="">
            </a>
            </li>
             `
           // `<article class="caja">
            //<a href="serieDetail.html" class="pelicula-serie"><img class="fotopeli" src="${linkimagen}${results.poster_path}" alt="" id="casapapel"></a>
             //</article>`
        }


        })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

});

//`<article class="caja">
  //          <a href="serieDetail.html" class="pelicula-serie"><img class="fotopeli" src="${linkimagen}${results.poster_path}" alt="" id="casapapel"></a>
    //         </article>`