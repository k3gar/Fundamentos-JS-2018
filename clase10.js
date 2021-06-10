var cooper = {
    nombre: 'Cooper',
    apellido: 'Palacios',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    perro: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero === true ){
        console.log('Ingeniero')
    }
    if(persona.cocinero === true ){
        console.log('cocinero')
    }
    if(persona.cantante === true ){
        console.log('cantante')
    }
    if(persona.dj === true ){
        console.log('DJ')
    }
    if(persona.perro === true ){
        console.log('Perro')
    }

}

//Para indicar una constante la indicamos de la siguiente manera:
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

//Funciones que retornan valores
/* 
function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
} */