window.addEventListener("load",function(){ 

    var contenidoBusqueda = document.querySelector(`[name=nombreusuario]`)
    var form = document.querySelector(`#form`)


    form.addEventListener(`submit`, function (event) {
       
        if (contenidoBusqueda.value == ``) {
        event.preventDefault()
        contenidoBusqueda.classList.add(`error`)
        form.innerHTML = `<div>
        <input name="nombreusuario" type="text" placeholder="Nombre...">
        <button id="botonsubmit" type="submit">Enviar</button> </div>
        <p id="errorp">Error: Porfavor recargue la pestaña e ingrese su nombre.</p>
        `
        }
    })



})