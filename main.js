const cartasPc = document.querySelector('.mazo-pc')
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

