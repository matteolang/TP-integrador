window.addEventListener(`load`, function() {
    



    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjBusqueda = queryStringObj.get(`barrabusqueda`)
    console.log(queryStringObjBusqueda)







})