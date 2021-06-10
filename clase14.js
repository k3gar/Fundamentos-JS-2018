var cooper = {
    nombre: 'Cooper',
    apellido: 'Palacios',
    edad: 3,
    peso: 75
}

console.log(`Al inicio del año ${cooper.nombre} pesaba ${cooper.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = cooper.peso - 3
var dias = 0

while (cooper.peso > META){
    if(comeMucho()){
        //aumentarDePeso
        aumentarDePeso(cooper)
    }
    if(realizaDeporte()){
        //adelgazar
        adelgazar(cooper)
    }
    dias += 1
}

console.log(`Pasaron ${dias} hasta que ${cooper.nombre} adelgazó 3kg`)