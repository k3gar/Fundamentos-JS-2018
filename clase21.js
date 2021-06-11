//Cómo funcionan las clases en JavaScript
/* 
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi altura es ${this.altura}`)
}

const altura = 180

var kevin = new Persona('Kevin', 'Garcia', 180)
var cooper = new Persona('cooper', 'palacios', 50)
kevin.saludar()
cooper.saludar() */

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function(){
    if(this.altura == 180){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi altura es ${this.altura}cm. SOY ALTO!`)
    }
    else{
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi altura es ${this.altura}cm. No soy alto!`)
    }
    debugger
}

const altura = 180

//var kevin = new Persona('Kevin', 'Garcia', 180)
var cooper = new Persona('cooper', 'palacios', 50)
//kevin.saludar()
cooper.saludar()