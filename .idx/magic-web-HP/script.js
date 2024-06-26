document.addEventListener('DOMContentLoaded', function () {
    let lumus = document.querySelector('.lumus');
    
  
  
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      lumus.style.left = mouseX + 'px';
      lumus.style.top = mouseY + 'px';
  
      
    });
  });
  
  const API= 'https://hp-api.onrender.com/api/characters'
  const url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsDkJnmn3FmORRlfadPjJkIBnwP7rcwxkNw&s'

  const container = document.querySelector('.conteiner');

  fetch(API)
    .then(response => response.json())
    .then(data => {
      data.forEach(character => {

        // const cardElement = document.createElement('div');
        // cardElement.classList.add('card');
        
        // const frontElement = document.createElement('div');
        // frontElement.classList.add('front');
        
        // const h1Element = document.createElement('h1');
        // h1Element.textContent = character.name;
        // frontElement.appendChild(h1Element);
        
        // const imgElement = document.createElement('img');
        // imgElement.src = character.image;
        // imgElement.alt = character.name;
        // cardElement.appendChild(imgElement);
  
        // const infoElement = document.createElement('div');
        // infoElement.classList.add('card-info');
  
        // const nameElement = document.createElement('h3');
        // nameElement.textContent = character.name;
        // infoElement.appendChild(nameElement);
  
        // const houseElement = document.createElement('p');
        // houseElement.textContent = `House: ${character.house}`;
        // infoElement.appendChild(houseElement);
  
        // const patronusElement = document.createElement('p');
        // patronusElement.textContent = `Patronus: ${character.patronus}`;
        // infoElement.appendChild(patronusElement);
  
        // cardElement.appendChild(infoElement);
        // container.appendChild(cardElement);
        // cardElement.appendChild(frontElement);

        
        personajes=`
        <div class="card">
            <div class="front">
              <h1>${character.name}</h1>
            </div>
            <div class="back">
              <img src="${character.image}">
                <div class="card-info">
                    <h3>${character.name}</h3>
                    <p>House: ${character.house}</p>
                    <p>Patronus: ${character.patronus}</p>
                </div>
              </div>
        </div>
        `
        container.innerHTML += personajes;
        
      });
    });
  