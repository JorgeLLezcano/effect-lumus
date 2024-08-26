
const container = document.querySelector('.conteiner');
const API= 'https://hp-api.onrender.com/api/characters'
const url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsDkJnmn3FmORRlfadPjJkIBnwP7rcwxkNw&s'

const loadingMessage = document.getElementById('loading-message');
loadingMessage.style.display = 'block'




fetch(API)
  .then(response => response.json())
  .then(data => {
    data.forEach(character => {
      tarjetas=`
      <div class="card">
          <div class="front">
            <h1>${character.name}</h1>
            <img src="${url}">
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
      container.innerHTML += tarjetas;
      loadingMessage.style.display = 'none';
    });
  });


   document.addEventListener('DOMContentLoaded', function () {
    let lumus = document.querySelector('.lumus');
    
  
  
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    
      lumus.style.left = mouseX + 'px';
      lumus.style.top = mouseY + 'px';
    
    });
    
  });
  
 