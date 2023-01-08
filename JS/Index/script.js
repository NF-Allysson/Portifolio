
// variaveis
let button_theme = document.getElementById('btn-switch')
let troca_icon = document.getElementById('theme')
let parte1 = document.getElementById('slides_slide')
let cabeca = document.getElementById('header')
let sobre = document.getElementById('parallax-sobre')
let button_radio = document.getElementById('wrapper')
let count = 1;
let inscreva = document.getElementById('btn-inscreva')
let redirec = document.querySelector('.btn-redirec')
let home = document.getElementById('home')
let logon = document.getElementById('logon')
let suporte = document.getElementById('suporte')
let conversa= document.getElementById('conversa')
//let         = document.getElementById('')



// let proximo = document.getElementById('next')
// let anterior = document.getElementById('prev')
// let slide_atual = 0;
// let navegador_slide = document.querySelectorAll('#nav-navigation label')

// style - mudanças no css



// adicionar lista

button_theme.addEventListener('click', trocarTema)
parte1.addEventListener('scroll', cabecalhoPag)
sobre.addEventListener('scroll', cabecaSobre)
inscreva.addEventListener('click', irLogin)
redirec.addEventListener('click', irLogin)
// proximo.addEventListener('click',passarProx)
// anterior.addEventListener('click', voltarSlide)
troca_icon.addEventListener('click', trocarTema)
home.addEventListener('click', marcarDisable)
suporte.addEventListener('click', marcarDisable)
logon.addEventListener('click', marcarDisable, irLogin)
logon.addEventListener('click', irLogin)
suporte.addEventListener('click', irSuporte)
conversa.addEventListener('click', marcarDisable)


// funções 

// função de redirecionamento para a pagina de login e suporte

function irLogin() {
    window.location.href = "login.html"
}

function irSuporte() {
    window.location.href = "support.html"
}

// função para trocar o tema e o icon

function trocarTema() {
    troca_icon.classList.toggle('fa-sun')
    troca_icon.classList.toggle('fa-moon')
    button_theme.toggleAttribute('checked')

}
// função do header ao voltar a primeira parte
function cabecalhoPag() {
    cabeca.style.display = "flex"
    cabeca.style.position = "relative"
}
// função do header ao rolar
function cabecaSobre() {
    cabeca.style.display = "flex"
    cabeca.style.position = "fixed"
}


function marcarDisable() {
    home.style.textDecorationLine = "underline"
}

// função da barra de navegar responsiva

$(document).ready(function () {
    $('#menu-icon').click(function () {
        $(this).toggleClass('fa-times')
        $('.nav-barra').toggleClass('nav-toggle')
    })
})


// intervalo de tempo e passagem

document.getElementById("slide1").checked = true;

setInterval(function () {
    nextImagem()
}, 8000)

function nextImagem() {
    count++;
    if (count > 5) {
        count = 1
    }
    document.getElementById("slide" + count).checked = true;
}


window.addEventListener("scroll", () => {
    // calculo do tamanho util do documento

    let hauteur = document.documentElement.scrollHeight - window.innerHeight

    // recuperação da posição vertical
    let position = window.scrollY

    // Obter largura da página
    let largeur = document.documentElement.clientWidth

    // calcular a largura da barra
    let barre = position / hauteur * largeur
    document.getElementById("progress").style.width = barre + "px"


})
// cards

