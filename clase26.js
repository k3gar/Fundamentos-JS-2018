class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre, this.apellido)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona { //Extends nos permite extender la función de otra clase (prototipo)
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}
var kevin = new Persona('Kevin', 'Garcia', 1.80)
var cooper = new Desarrollador('Cooper', 'Palacios', 1.10)

kevin.saludar(responderSaludo)
cooper.saludar(responderSaludo)