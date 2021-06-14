const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callback).fail(function (){
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    }) 
}

obtenerPersonaje(1, function(data){
    console.log(`Hola, yo soy ${data.name}`)

    obtenerPersonaje(2, function(data){
        console.log(`Hola, yo soy ${data.name}`)

        obtenerPersonaje(3, function(data){
            console.log(`Hola, yo soy ${data.name}`)

            obtenerPersonaje(4, function(data){
                console.log(`Hola, yo soy ${data.name}`)

                obtenerPersonaje(5, function(data){
                    console.log(`Hola, yo soy ${data.name}`)

                    obtenerPersonaje(2555, data)
                        console.log(`Hola, yo soy ${data.name}`)
                })
            })
        })
    })
})
