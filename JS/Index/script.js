//barra de navegar responsiva

$(document).ready(function () {
    $('#menu-icon').click(function () {
        $(this).toggleClass('fa-times')
        $('.nav-barra').toggleClass('nav-toggle')
    })
})

//  let men2 = document.getElementById("part2")
let parallax1 = document.getElementById("part1")
let cabecalho = document.getElementById("header")
//  men2.addEventListener('wheel', () => {
//      bar.style.display = "flex"
//      bar.style.position = "fixed"
//  })
parallax1.addEventListener('wheel', () => {
    cabecalho.style.display = "flex"
    cabecalho.style.position = "relative"
})

let theme = document.getElementById("btn-switch")
let icon_theme = document.getElementById("theme")
let corpo = document.querySelector("header")

theme.addEventListener('click', TemaEscuro)
function TemaEscuro() {
    icon_theme.classList.toggle('fa-sun')
    icon_theme.classList.toggle('fa-moon')
    corpo.classList.toggle('active')
}

//passador automatico parallax slide
let number = 1
let slider = document.get 

let contador = 1;

setInterval(function () {
  let slider =  document.getElementById('slider' + contador).checked = true;
    contador++;

    if (counter > 5) {
        contador = 1;
    }
}, 3000);