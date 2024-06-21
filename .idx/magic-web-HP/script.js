document.addEventListener('DOMContentLoaded', function () {
    let lumus = document.querySelector('.lumus');
    
  
  
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      lumus.style.left = mouseX + 'px';
      lumus.style.top = mouseY + 'px';
  
      
    });
  });
  