const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const onResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`)
}

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, {crossDomain: true}, onResponse)

