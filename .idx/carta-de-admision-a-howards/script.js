// const root =document.querySelector('.root')

// const APPI='https://hp-api.onrender.com/api/characters'

// fetch(APPI)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(character => {
//      let tarjetas=`
//      <div class="card">
//           <div class="front">
//             <img src="${character.image}">
//               <div class="card-info">
//                   <h3>${character.name}</h3>
//                   <p>House: ${character.house}</p>
//                   <p>Patronus: ${character.patronus}</p>
//               </div>
//             </div>
//       </div>
//       `
//       root.innerHTML += tarjetas;
  
//     });
//   });
const API = 'https://hp-api.onrender.com/api/characters';
const wrapp = document.querySelector('.wrapp');
const imagenPorDefecto = "https://placehold.it/200x200";
const nextButton = document.querySelector('nextButton');
const prevButton = document.querySelector('prevButton'); // Asume que tienes un botón con este ID
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
