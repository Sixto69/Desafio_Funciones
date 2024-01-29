function createKeyDiv(color) {
    const keyContainer = document.getElementById('key');
    const newKeyDiv = document.createElement('div');
    newKeyDiv.className = 'key-div';
    newKeyDiv.style.backgroundColor = color;
    keyContainer.appendChild(newKeyDiv);
  }
  
  // Variable global para almacenar el color
  let currentColor = '';
  
  // Función para cambiar el color del div "key"
  function changeColor(color) {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
  }
  
  document.addEventListener('keydown', function (event) {
    // Asignar colores según la tecla presionada
    if (event.key === 'a') {
      currentColor = 'pink';
    } else if (event.key === 's') {
      currentColor = 'orange';
    } else if (event.key === 'd') {
      currentColor = 'skyblue';
    } else if (event.key === 'q') {
      currentColor = 'purple';
      createKeyDiv(currentColor);
    } else if (event.key === 'w') {
      currentColor = 'grey';
      createKeyDiv(currentColor);
    } else if (event.key === 'e') {
      currentColor = 'brown';
      createKeyDiv(currentColor);
    }
  
    // Cambiar el color del div "key"
    if (currentColor) {
      changeColor(currentColor);
    }
  });
  