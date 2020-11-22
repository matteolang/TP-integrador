window.addEventListener(`load`,function() {

   
    var queryString = location.search
    var queryStringObj = new URLSearchParams (queryString)
    var queryStringObjId = queryStringObj.get(`id`)
    

    var favs =  JSON.parse(localStorage.getItem("favoritos"))

    if (favs == null) {
        favs = []
    }



   favs.push(queryStringObjId)

   if (queryStringObjId == null) {
       favs.pop()
   }

   localStorage.setItem("favoritos", JSON.stringify(favs))

console.log(localStorage)


    
var contenedorFavoritos = document.querySelector(`.div-favoritos`)







































})