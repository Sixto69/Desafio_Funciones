// buscar los elementos
const divA = document.querySelector('#a')
const divB = document.querySelector('#b')
const divC = document.querySelector('#c')
const divD = document.querySelector('#d')
const keyDiv = document.querySelector('#key')

// funciones para que cambie de color

const changeBackgrounColor = (event) => {
    const color = ["purple" , "blue", "green", "orange", "yellow", "red"];

   if(event.target.style.backgroundColor != "black"){
    event.target.style.backgroundColor  = "black"
    return
   }
   const randomColor = color[Math.floor(Math.random() * color.length)]
   event.target.style.backgroundColor  = randomColor
}

//Ejecutar las funciones
divA.addEventListener("click", changeBackgrounColor)
divB.addEventListener("click", changeBackgrounColor)
divC.addEventListener("click", changeBackgrounColor)
divD.addEventListener("click", changeBackgrounColor)

const createNewDiv = (color) => {
    const newDiv = document.createElement("div")
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.margin = "20px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
};

document.addEventListener("keydown", function (event) {
   // var keyDiv = document.getElementById("keyDiv");

    if (event.keys === "a") {
        keyDiv.style.backgroundColor = "pink";
    } else if (event.keys === "s") {
        keyDiv.style.backgroundColor = "orange";
    } else if (event.keys === "d") {
        keyDiv.style.backgroundColor = "skyblue";
    } else if (event.keys === "q") {
        createNewDiv("purple");
    } else if (event.keys === "w") {
        createNewDiv("gray");
    } else if (event.keys=== "e") {
        createNewDiv("brown");
    }
});


   
       

    
    

    
    

