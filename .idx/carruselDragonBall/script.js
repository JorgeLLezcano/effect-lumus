const API = 'https://dragonball-api.com/api/characters?limit=45';
const wrapp = document.querySelector('.wrapp');
const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');
let currentIndex = 0;

fetch(API)
  .then(response => response.json())
  .then(data => {
    const characters = data.items;

    function displayCharacter(index) {
      if (!characters || !characters[index]) return;

      const character = characters[index];
      const prevIndex = index === 0 ? characters.length - 1 : index - 1;
      const nextIndex = index === characters.length - 1 ? 0 : index + 1;

      const personajes = `
        <div class="card">
          <img src="${characters[prevIndex].image}" alt="Imagen anterior">
          <img src="${character.image}" alt="${character.name}">
          <img src="${characters[nextIndex].image}" alt="Imagen siguiente">
        </div>
      `;

      wrapp.innerHTML = personajes;
    }

    // Mostrar el primer personaje al cargar la página
    displayCharacter(currentIndex);

    // Eventos para los botones
    nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= characters.length) currentIndex = 0;
      displayCharacter(currentIndex);
    });

    prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) currentIndex = characters.length - 1;
      displayCharacter(currentIndex);
    });
  });