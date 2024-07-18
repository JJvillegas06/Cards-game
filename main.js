const cartasPc = document.querySelector('.mazo-pc')
const cartasJugador = document.querySelector('.mazo-jugador')
const btnJugar = document.querySelector('.jugar')
const eleccionJugador = document.querySelector('.eleccion-jugador')
const eleccionPc = document.querySelector('.eleccion-pc')
const resultado = document.querySelector('.resultado')
const btnReiniciar = document.querySelector('.reiniciar')
let divContador = document.querySelector('.contador')

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
    console.log(cartasPlayer.length)
    console.log(cartasMaquina.length)

    if (numeros.indexOf(cartashown[0]) == numeros.indexOf(cartashown2[0])) {
        resultado.innerHTML = "empate"
        if (pintas.indexOf(cartashown[1]) == pintas.indexOf(cartashown2[1])) {
            resultado.innerHTML = "empate"
        } else if (pintas.indexOf(cartashown[1]) > pintas.indexOf(cartashown2[1])) {
            resultado.innerHTML = "ganaste"
        } else {
            resultado.innerHTML = "perdiste"

        }
    } else if (numeros.indexOf(cartashown[0]) > numeros.indexOf(cartashown2[0])) {
        resultado.innerHTML = "ganaste"
    } else {
        resultado.innerHTML = "perdiste"

    }
    if(resultado.innerHTML == "empate"){
        cartasEmpate.push(cartashown)
        cartasEmpate.push(cartashown2)
    } else if(resultado.innerHTML == "ganaste"){
        cartasGanadasPlayer.push(cartashown2)
        console.log(cartasGanadasPlayer)
    }else{
        cartasGanadasPc.push(cartashown)
        console.log(cartasGanadasPc)
    }


    if(cartasPlayer.length == 0){
        ganador()
    }

    
    
}

function ganador(){
    let  divResultado = document.querySelector('.ganador')
    if(cartasGanadasPlayer.length == cartasGanadasPc.length){
        console.log('empate')
        Winner = document.createElement('button')
        Winner.innerHTML = 'empate'
        divResultado.appendChild(Winner)
        Winner.classList.add('estilo')
    }else if(cartasGanadasPlayer.length > cartasGanadasPc.length){
        alert('ganaste')
        divContador.innerHTML = 'ganaste'
        divContador.classList.add('letreroGanador')
    }else{
        alert('perdiste')
        Winner = document.createElement('button')
        Winner.innerHTML = 'perdiste'
        divResultado.appendChild(Winner)
        Winner.classList.add('estilo')
    }

    reiniciar()
    
}

function agregar() {
    eleccionJugador.innerHTML = `<img src="img/${cartashown}.png">`
    eleccionPc.innerHTML = `<img src="img/${cartashown2}.png">`

}


btnJugar.addEventListener('click', sacarCarta)

btnReiniciar.addEventListener('click',reiniciar)
    
    
function reiniciar() {
    numeros = "23456789JQKA"
    pintas = "CPTD"
    cartas = []

    for (i = 0; i < 20; i++) {
        numero = numeros[Math.floor(Math.random() * numeros.length)]
        pinta = pintas[Math.floor(Math.random() * pintas.length)]
        carta = numero + pinta
        cartas.push(carta)
    }
    cartasPlayer = cartas.slice(0, 10)
    cartasMaquina = cartas.slice(10, 20)



    console.log(cartas)
    console.log(cartasPlayer)
    console.log(cartasMaquina)
    console.log('hola')

    
}