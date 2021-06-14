const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const onResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, {crossDomain: true}, onResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)