const antz = document.getElementById('antz');
const frame=document.getElementById('frame')
const frog = document.getElementById('frog');
const liveBar = document.getElementById('live');
const liveEnemi=document.getElementById('live-enemi')
let posX = 0; // Posición inicial en X
let posY = 0; // Posición inicial en Y
let antzHealth = 100; // Porcentaje de vida inicial de antz (DEFINIDO AQUÍ)
let frogHealth=100
// Evento para mover `antz` con las teclas del teclado
window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      posY -= 10;
      break;
    case 'ArrowDown':
      posY += 10;
      break;
    case 'ArrowLeft':
      posX -= 10;
      antz.style.transform = 'rotateY(0deg)';
      break;
    case 'ArrowRight':
      posX += 10;
      antz.style.transform = 'rotateY(180deg)';
      break;
  }
if(event.key==='ArrowUp'||event.key==='ArrowDown'||event.key==='ArrowLeft'||event.key==='ArrowRight'){
  frame.classList.add('move')
}else{
  frame.classList.remove('move')
}
  // Actualiza la posición de antz
  antz.style.left = `${posX}px`;
  antz.style.top = `${posY}px`;

  // Verifica colisión con frog
  if (checkCollision(antz, frog)) {
    reduceHealth();
  }
});

window.addEventListener('keyup', function () {
  frame.classList.remove('move');
});
// Función para verificar colisión entre dos elementos
function checkCollision(div1, div2) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();

  return !(
    rect1.top > rect2.bottom ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right ||
    rect1.right < rect2.left
  );
}

// Función para reducir la vida de antz y actualizar la barra de vida
function reduceHealth() {
  antzHealth -= 10; // Reduce 10% de la vida
  if (antzHealth < 0) antzHealth = 0; // No permitir valores negativos

  liveBar.style.width = `${antzHealth}%`;
  
  // Opcional: Si la vida llega a 0, muestra un mensaje
  if (antzHealth === 0) {
    antz.classList.add('derrota')
    frogHealth-=10
    liveEnemi.style.width=`${frogHealth}%`

  }
}
