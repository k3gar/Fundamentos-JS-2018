//Filtro de Arrays
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
const esAlta = persona => persona.altura > 1.8
const esBaja = ({altura}) => altura < 1.8 
//👆 Al declararlo como ({altura}) estoy especificando directamente que quiero acceder
//a ese atributo. La variable persona ya no la declaramos, ya que la llamamos
//con "var personasBajas = personas.filter(esBaja)"

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var respuesta = prompt('Quiere conocer a las personas altas o bajas?')

if (respuesta === 'altas') {
    console.log(personasAltas)
}
else if (respuesta === 'bajas') {
    console.log(personasBajas)
}
else {
    alert('Valor erroneo')
}