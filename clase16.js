//Switch
//Nos sirve en caso que tengamos que realizar muchas validaciones (o "if's")
var signo = prompt('¿Cuál es tu signo?')

switch (signo){
    case 'acuario': console.log('Eres Acuario')
    break

//Cada caso se detiene hasta que se encuentra con un break
    case 'libra': console.log('Eres libra')
    break
    case 'leo': console.log('Eres leo')
    break
    case 'aries': console.log('Eres aries')
    break
    case 'piscis': console.log('Eres piscis')
    break
//default se ejecuta al no lograr validar ninguna de las condiciones anteriores. Debe llevar el break.
    default:
        console.log('No es un signo válido')
        break
}

