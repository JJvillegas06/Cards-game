const cartasPc = document.querySelector('.mazo-pc')
const cartasJugador = document.querySelector('.mazo-jugador')
const btnJugar = document.querySelector('.jugar')
const eleccionJugador = document.querySelector('.eleccion-jugador')
const eleccionPc = document.querySelector('.eleccion-pc')

let numeros = "23456789JQKA"
let pintas = "CPTD"
let cartas = []
let cartasGanadasPlayer = []
let cartasGanadasPc = []
let cartasEmpate = []
let Winner
let contador3 = 0




for (i = 0; i < 20; i++) {
    numero = numeros[Math.floor(Math.random() * numeros.length)]
    pinta = pintas[Math.floor(Math.random() * pintas.length)]
    carta = numero + pinta
    cartas.push(carta)
}


let cartasPlayer = cartas.slice(0, 10)
let cartasMaquina = cartas.slice(10, 20)

console.log(cartas)
console.log(cartasPlayer)
console.log(cartasMaquina)

function sacarCarta() {

    contador3++
    divContador.textContent = contador3
    
    cartashown = cartasPlayer.shift()
    cartashown2 = cartasMaquina.shift()
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

