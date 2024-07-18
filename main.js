const cartasPc = document.querySelector('.mazo-pc')
const cartasJugador = document.querySelector('.mazo-jugador')
const btnJugar = document.querySelector('.jugar')
const eleccionJugador = document.querySelector('.eleccion-jugador')
const eleccionPc = document.querySelector('.eleccion-pc')
const resultado = document.querySelector('.resultado')
let numeros = "A23456789JQK"
let pintas = "CPTD"
let cartas = []
let cartasDiamante = []
let cartasTrebol = []
let cartasPicas = []
let cartasCorazon = []
let cartasGanadasJugador1 = []
let cartasGanadasJugador2 = []
let cartasJugadas = []


for (i = 0; i < 20; i++) {
    numero = numeros[Math.floor(Math.random() * numeros.length)]
    pinta = pintas[Math.floor(Math.random() * pintas.length)]
    carta = numero + pinta
    cartas.push(carta)
}

let cartasJugadorAlt = cartas.slice(0, 10)
let cartasPcAlt = cartas.slice(10, 20)

console.log(cartas)
console.log(cartasJugadorAlt)
console.log(cartasPcAlt)

function juegoAleatorio() {
    numeroAleatorio1 = Math.floor(Math.random() * 10)
    numeroAleatorio2 = Math.floor(Math.random() * 10)
    cartashown = cartasJugadorAlt[numeroAleatorio1]
    cartashown2 = cartasPcAlt[numeroAleatorio2]
    console.log(cartashown)
    console.log(cartashown2)
    guardarValores()

    if(cartasDiamante.includes('2D')||cartasDiamante.includes('3D')||cartasDiamante.includes('4D')||cartasDiamante.includes('5D')){
        cartasGanadasJugador1.push(cartashown2)
       cartasDiamante.shift(cartasJugadas)
        console.log(cartasGanadasJugador1)
        console.log(cartasJugadas)
        console.log(cartasDiamante)

    }
    
    agregar()

}

/*function comparar (){
    let counter = 0
    counter ++
    if(counter > cartasDiamante.length){
        counter = 0
    }
    if(cartashown == cartasDiamante ){
        cartasGanadasJugador1.push(cartashown2)
        resultado.innerHTML = 'ganaste'
        console.log(cartasGanadasJugador1)
    }

    
    console.log(counter)
}*/


function agregar() {
    eleccionJugador.innerHTML = ` <img src="img/${cartashown}.png"/>` 
    eleccionPc.innerHTML = ` <img src="img/${cartashown2}.png"/>` 

}

btnJugar.addEventListener('click', juegoAleatorio)

//ESTA FUNCION GUARDA LOS VALORES DE LA CARTA DIAMANTE EN UN ARRAY QUE LUEGO SE USA PARA COMPARAR CON LA RESPUESTA DEL PC
function guardarValores() {
    if (cartashown == '2D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '3D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '4D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '5D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '6D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '7D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '8D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == '9D') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == 'JD') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == 'QD') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    } else if (cartashown == 'KD') {
        cartasDiamante.push(cartashown)
        console.log(cartasDiamante)
        console.log(cartasDiamante.length)
    }

}

function quitarSumar(){
    if(cartashown && cartashown2 == 'AD,2D,3D,4D,5D,6D,7D,8D,9D,JD,QD,KD' ){
        resultado.innerHTML = "empate"
        
    }
} 




/*const cartasPc = document.querySelector('.mazo-pc')
const cartasJugador = document.querySelector('.mazo-jugador')
const btnJugar = document.querySelector('.jugar')
const eleccionJugador = document.querySelector('.eleccion-jugador')
const eleccionPc = document.querySelector('.eleccion-pc')




let numeros = "A23456789JQK"
let pintas = "CPTD"
let cartas = []

for (i = 0; i < 20; i ++){
    numero = numeros[Math.floor(Math.random() * numeros.length)]
    pinta = pintas[Math.floor(Math.random() * pintas.length)]
    carta = numero + pinta
    cartas.push(carta)
}


let cartasJugadorAlt = cartas.slice(0,10)
let cartasPcAlt = cartas.slice(10,20)

console.log(cartas)
console.log(cartasJugadorAlt)
console.log(cartasPcAlt)

function juegoAleatorio(){
    
    numeroAleatorio1 =  Math.floor(Math.random() * 11)
    numeroAleatorio2 = Math.floor(Math.random() * 11 )
    cartashown = cartasJugadorAlt[numeroAleatorio1]
    cartashown2 = cartasPcAlt[numeroAleatorio2]
    console.log(cartashown)
    console.log(cartashown2)
    
    agregar()
    
}


function agregar (){

    eleccionJugador.innerHTML = `<img src="img/${cartashown}.png">`
    eleccionPc.innerHTML = `<img src="img/${cartashown2}.png">`
    
    console.log(cartasJugador) 
}

btnJugar.addEventListener('click', juegoAleatorio ,)
*/
