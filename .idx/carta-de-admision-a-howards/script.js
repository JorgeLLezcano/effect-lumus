const root =document.querySelector('.root')

const APPI='https://hp-api.onrender.com/api/characters'

fetch(APPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(character => {
     let tarjetas=`
     <div class="card">
          <div class="front">
            <img src="${character.image}">
              <div class="card-info">
                  <h3>${character.name}</h3>
                  <p>House: ${character.house}</p>
                  <p>Patronus: ${character.patronus}</p>
              </div>
            </div>
      </div>
      `
      root.innerHTML += tarjetas;
      
    });
  });