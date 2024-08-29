// const API = 'https://hp-api.onrender.com/api/characters';
// const wrapp = document.querySelector('.wrapp');
// const imagenPorDefecto = "https://placehold.it/200x200"; // Imagen por defecto si no hay una disponible

// fetch(API)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(character => {
//       const personajes = `
//         <div class="card">
//           <div class="front">
//             <h1>${character.name}</h1>
//             <img src="${character.image || imagenPorDefecto}">
//           </div>
//         </div>
//       `;
//       wrapp.innerHTML += personajes;
//     }
//     );
//   });

  
const API = 'https://hp-api.onrender.com/api/characters';
const wrapp = document.querySelector('.wrapp');
const imagenPorDefecto = "https://placehold.it/200x200";
const nextButton = document.querySelector('.nextButton'); // Asume que tienes un botón con este ID
const prevButton = document.querySelector('.prevButton')
let currentIndex = 0;

fetch(API)
  .then(response => response.json())
  .then(data => {
    const characters = data; // Almacenamos los datos para poder iterar sobre ellos

    function displayCharacter(index) {
      const character = characters[index];
      const personajes = `
        <div class="card">
          <div class="front">
            <h1>${character.name}</h1>
            <img src="${character.image || imagenPorDefecto}">
            
          </div>
        </div>
   
      `;
      wrapp.innerHTML = personajes;
    }

    // Mostrar el primer personaje al cargar la página
    
      displayCharacter(currentIndex);
  
    
    // Evento para el botón Next
    nextButton.addEventListener('click', () => {
      currentIndex++;
     
     
      if (currentIndex >= characters.length) {
        currentIndex = 0; // Volver al principio si llegamos al final
        
      }
      
      displayCharacter(currentIndex);
    });
   

    prevButton.addEventListener('click', () => {
      currentIndex--;
     
      if (currentIndex >= characters.length) {
        currentIndex = 0; // Volver al principio si llegamos al final
      }
      displayCharacter(currentIndex);
    });
  });
