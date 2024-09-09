const API = 'https://dragonball-api.com/api/characters?limit=56';
const container = document.querySelector('.conteiner');

// Fetch inicial para mostrar los personajes en el contenedor principal
fetch(API)
  .then(response => response.json())
  .then(data => {
    if (data.items) { // Aseguramos que accedemos a data.items
      data.items.forEach(character => {
        const card = `
          <div class="card">
            <div class="front">
              <h1>${character.name}</h1>
              <img src="${character.image}">
              <div class="card-info">
                <h3>${character.name}</h3>
                <p><strong>ki maximo</strong>: ${character.maxKi}</p>
                <p><strong>raza</strong>: ${character.race}</p>
              </div>
            </div>
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


const input = document.querySelector('input');
const resultados = document.querySelector('.resultado');
const search = document.getElementById('search');

// Evento para buscar personajes a medida que se escribe
search.addEventListener('input', async () => {
  const busqueda = input.value.toLowerCase();
  
  // Si el input está vacío, limpiamos el contenedor de resultados y lo ocultamos
  if (busqueda === '') {
    resultados.innerHTML = '';  // Limpiamos los resultados
    resultados.classList.remove('visible'); // Ocultamos el contenedor de resultados
    resultados.classList.add('hidden'); // Agregamos la clase 'hidden' // Ocultamos el contenedor de resultados
    return;
  }

  const respuesta = await fetch(API);
  const datos = await respuesta.json();

  resultados.innerHTML = ''; // Limpiamos los resultados anteriores
  resultados.classList.remove('hidden'); // Mostramos el contenedor de resultados
  resultados.classList.add('visible'); // Agregamos la clase 'visible' // Mostramos el contenedor de resultados

  if (datos.items) { // Aseguramos que accedemos a datos.items
    const personajesFiltrados = datos.items.filter(personaje => {
      return personaje.name.toLowerCase().includes(busqueda);
    });

    personajesFiltrados.forEach(personaje => {
      const divPersonaje = document.createElement('div');
      divPersonaje.innerHTML = `
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}">
        <div class="card-info">
        <h3>${personaje.name}</h3>
        <p><strong>ki maximo</strong>: ${personaje.maxKi}</p>
        <p><strong>raza</strong>: ${personaje.race}</p>
      </div>
      `;
      resultados.appendChild(divPersonaje);
    });
  } else {
    console.error('No characters found in the response.');
  }
});

