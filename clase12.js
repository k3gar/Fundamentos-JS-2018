var cooper = {
    nombre: 'Cooper',
    apellido: 'Palacios',
    edad: 3,
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

/* var esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

//Arrow Function - Esto es igual a lo que está en la parte de arriba 👆
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD //Cuando solo tenemos un parámetro en la función podemos obviar los paréntesis

//Otra manera 👇
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD 
//Al colocar ({edad}) estamos definiendo que ingresaremos un objeto que posee un parámetro edad


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)){
        console.log('Acceso Negado')
    }
}