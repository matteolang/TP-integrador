window.addEventListener(`load`, function() {
    

    var sectionResultadosPelis = document.querySelector(`.resultados-peliculas`)
    var sectionResultadosSeries = document.querySelector(`.resultados-series`)

    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjBarraBusqueda = queryStringObj.get(`barrabusqueda`)
    var queryStringObjTipo = queryStringObj.get(`tipo`)

    console.log(queryStringObjBarraBusqueda)
    console.log(queryStringObjTipo)

    

//????????????
    if (queryStringObjTipo == `peliculas`) {
        
        sectionResultadosPelis.innerHTML += 
        `${queryStringObjBarraBusqueda}`

    }
    else if (queryStringObjTipo == `series`){

        sectionResultadosSeries.innerHTML += 
        `${queryStringObjBarraBusqueda}`

    }
  






})