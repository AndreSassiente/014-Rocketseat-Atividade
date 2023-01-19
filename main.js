//variables
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

let fortuneCookie = document.querySelector(".screen1 img")
let resetFortuneCookie = document.querySelector(".screen2 button")

let phrase = document.querySelector(".screen2 span")

const luckPhrases = [
    "A vida trará coisas boas se tiver paciência",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
]

//functions
function showCookie(e){
    e.preventDefault()

    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    playSound("audio/audio-cookie.mp3")
    phrase.innerText = luckPhrases[Math.floor(Math.random()*luckPhrases.length)]
}

function resetCookie() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    playSound("audio/audio-click.mp3")
}

function toogleScreen() {
    screen1.classList.toogle("hide")
    screen2.classList.toogle("hide")
}

function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}

//events
fortuneCookie.addEventListener("click", showCookie)
resetFortuneCookie.addEventListener("click", resetCookie)