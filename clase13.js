var cooper = {
    nombre: 'Cooper',
    apellido: 'Palacios',
    edad: 3,
    peso: 75
}

console.log(`Al inicio del año ${cooper.nombre} pesaba ${cooper.peso} kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++){
    var random = Math.random()
    if (random < 0.25){
        aumentarDePeso(cooper)
    }
    else if (random < 0.5){
        adelgazar(cooper)
    }

}

console.log(`Al final del año ${cooper.nombre} pesa ${cooper.peso.toFixed(1)} kg`)