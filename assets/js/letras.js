const wDiv = document.getElementById("key")
const divContainer = document.getElementById("divContainer")
const otrosDivsContainer = document.getElementById("otrosDivsContainer")
let color = "white"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        wDiv.style.backgroundColor = "pink"
        color = "pink"
    } else if (event.key === 's') {
        wDiv.style.backgroundColor = "orange"
        color = "orange"
    } else if (event.key === 'd') {
        wDiv.style.backgroundColor = "aqua"
        color = "aqua"

    } else if (event.key === 'q') {
        otrosDivsContainer.innerHTML += '<div class="purple"></div>'
        color = "purple"
    } else if (event.key === 'w') {
        otrosDivsContainer.innerHTML += '<div class="grey"></div>'
        color = "grey"
    } else if (event.key === 'e') {
        otrosDivsContainer.innerHTML += '<div class="brown"></div>'
        color = "brown"
    }
    console.log(color)
})