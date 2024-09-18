const API = 'https://dragonball-api.com/api/characters?limit=45';
const container = document.querySelector('.conteiner'); // Assuming your container has the class 'container'

fetch(API)
  .then(response => response.json())
  .then(data => {
    // Check if data.items exists (assuming characters are stored in an "items" property)
    if (data.items) {
      data.items.forEach(character => {
        const card = `
          <div class="card">
            
              <h1>${character.name}</h1>
              <img src="${character.image}">
             
            
          </div>
        `;
        container.innerHTML += card;
      });
    } else {
      console.error('Error: Characters not found in data');
    }
  })
  .catch(error => {
    console.error('Error fetching characters:', error);
  });