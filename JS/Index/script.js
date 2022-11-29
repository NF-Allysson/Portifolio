$(document).ready(function(){
    $('#menu-icon').click(function(){
        $(this).toggleClass('fa-times')
        $('.nav-barra').toggleClass('nav-toggle')
    })
})


let men2 = document.getElementById("part2")
let men = document.getElementById("part1") 
let bar = document.getElementById("header")

men2.addEventListener('wheel', () => {
    bar.style.display = "flex"
    bar.style.position = "fixed"
})
men.addEventListener('wheel', () => {
    bar.style.display = "flex"
    bar.style.position = "relative"
})





