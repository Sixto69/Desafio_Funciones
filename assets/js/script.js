// buscar los elementos
//const divA = document.querySelector('#a')
//const divB = document.querySelector('#b')
//const divC = document.querySelector('#c')
//const divD = document.querySelector('#d')
//const keyDiv = document.querySelector('key')

// funciones para que cambie de color

//const changeBackgrounColor = (event) => {
    //const color = ["purple", "blue", "green", "orange", "yellow", "red"];

    //if (event.target.style.backgroundColor != "black") {
        //event.target.style.backgroundColor = "black"
        //return
   //}
   // const randomColor = color[Math.floor(Math.random() * color.length)]
    //event.target.style.backgroundColor = randomColor
//}

//Ejecutar las funciones
//divA.addEventListener("click", changeBackgrounColor)
////divB.addEventListener("click", changeBackgrounColor)
//divC.addEventListener("click", changeBackgrounColor)
//divD.addEventListener("click", changeBackgrounColor)

//const createNewDiv = (color) => {
    //const newDiv = document.createElement("div")
    //newDiv.style.width = "200px";
    //newDiv.style.height = "200px";
    //newDiv.style.margin = "20px";
   // newDiv.style.backgroundColor = color;
   // document.body.appendChild(newDiv);
//};

//document.addEventListener("keydown", function (event) {
// var keyDiv = document.getElementById("keyDiv");

// if (event.key === "a") {
//  keyDiv.style.backgroundColor = "pink";
// } else if (event.key === "s") {
//     keyDiv.style.backgroundColor = "orange";
// } else if (event.key === "d") {
//    keyDiv.style.backgroundColor = "skyblue";
//} else if (event.key === "q") {
//    createNewDiv("purple");
// } else if (event.key === "w") {
//      createNewDiv("gray");
//  } else if (event.key=== "e") {
//     createNewDiv("brown");
//  }
//});


document.addEventListener("keydown", function(event) {
    const key = event.keytolowerCase();

    let newColor;
    switch (key) {
        case 'a':
            newColor = "pink";
            break;
        case 's':
            newColor = "orange";
            break;
        case 'd':
            newColor = "skyblue";
            break;
        case 'q':
            newColor = ("purple");
            break;
        case 'w':
            newColor = ("gray");
            break;
        case 'e':
            newColor = ("brown");
            break;
        default:
            return;
    }
    const keyDiv = document.getElementById("key");
    keyDiv.style.backgroundColor = newColor;
});

const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++){
    divs[i].addEventListener("click", function (event){
        event.target.style.backgroundColor = "black";

    });
}











