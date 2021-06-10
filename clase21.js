//Cómo funcionan las clases en JavaScript

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi altura es ${this.altura}`)
}

var kevin = new Persona('Kevin', 'Garcia', 170)
var cooper = new Persona('cooper', 'palacios', 50)
kevin.saludar()
cooper.saludar()