var kevin = {
    nombre: 'Kevin',
    apellido: 'Garcia',
    edad: 21
}
var cooper = {
    nombre: 'Cooper',
    apellido: 'Palacios',
    edad: 3
}

//Forma #1

/* function imprimirNombreEnMayusculas(persona){
   var  nombre = persona.nombre.toUpperCase()
   // var nombre = persona.nombre == var {nombre} = persona
    console.log(nombre)
} */

//Forma #2

/* function imprimirNombreEnMayusculas(persona){
     console.log(persona.nombre.toUpperCase)
 } */

 //Forma #3
 function imprimirNombreEnMayusculas({nombre}){ //Así definimos que solo queremos el atributo nombre.
     console.log(nombre.toUpperCase)
 }

imprimirNombreEnMayusculas(kevin)
imprimirNombreEnMayusculas(cooper)