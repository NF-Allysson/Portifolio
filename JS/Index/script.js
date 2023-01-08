
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



// let proximo = document.getElementById('next')
// let anterior = document.getElementById('prev')
// let slide_atual = 0;
// let navegador_slide = document.querySelectorAll('#nav-navigation label')

// style - mudanças no css



// adicionar lista

button_theme.addEventListener('click',trocarTema )
parte1.addEventListener('scroll',cabecalhoPag)
sobre.addEventListener('scroll',cabecaSobre)
inscreva.addEventListener('click',irLogin)
redirec.addEventListener('click',irLogin)
// proximo.addEventListener('click',passarProx)
// anterior.addEventListener('click', voltarSlide)
troca_icon.addEventListener('click', trocarTema)

// funções 

// função de redirecionamento para a pagina de login
function irLogin(){
    window.location.href = "login.html"
}
// função para trocar o tema e o icon
function trocarTema(){
    troca_icon.classList.toggle('fa-sun')
    troca_icon.classList.toggle('fa-moon')
    button_theme.toggleAttribute('checked')
     
}
// função do header ao voltar a primeira parte
function cabecalhoPag(){
    cabeca.style.display = "flex"
    cabeca.style.position = "relative"
}
// função do header ao rolar
function cabecaSobre(){
    cabeca.style.display = "flex"
    cabeca.style.position = "fixed"
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
 setInterval(function(){
    nextImagem()
 },8000)

 function nextImagem(){
    count++;
    if(count>5){
        count=1
    }
    document.getElementById("slide"+count).checked = true;
 }