//Loops do while
var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while(!llueve()) //Si esta condición se cumple, el código de arriba se ejecuta

if(contador < 2){
    console.log(`Fui a ver si llovía ${contador} vez`)
}
else{
    console.log(`Fui a ver si llovía ${contador} veces`)
}
