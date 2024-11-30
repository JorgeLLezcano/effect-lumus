correcto:
const input = document.querySelector('input');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const resultados = document.getElementById('resultados');

let resolt = 0; // Inicializamos resolt a 0
 let numero =0

input.addEventListener('input', function(){
  if (input.value === '') {
    resultados.innerText = '';
  }
 
if(numero!==0){
  resolt=parseFloat(input.value)
}else{
   numero=parseFloat(input.value)
}
  resolt = fncSuma(resolt, numero);
resultados.innerText = resolt;
});

function fncSuma(params, paramsDos) {
  return params + paramsDos;
}

function fncRestar(params, paramsDos) {
  return params - paramsDos;
}

sumar.addEventListener('click', function() {
  // numero = parseFloat(input.value);
  // resolt = fncSuma(resolt, numero);
  resultados.innerText = resolt;
  input.value = '';
});

restar.addEventListener('click', function() {
  numero = parseFloat(input.value);
  resolt = fncRestar(resolt, numero);
  resultados.innerText = resolt;
  input.value = '';
});

ejercicio ejemplo:
const input = document.querySelector('input');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const resultados = document.getElementById('resultados');

let resolt = 0; // Inicializamos resolt a 0

input.addEventListener('input', function() {
  if (input.value === '') {
    resultados.innerText = '';
  }
});

function fncSuma(params, paramsDos) {
  return params + paramsDos;
}

function fncRestar(params, paramsDos) {
  return params - paramsDos;
}

sumar.addEventListener('click', function() {
  const numero = parseFloat(input.value);
  resolt = fncSuma(resolt, numero);
  resultados.innerText = resolt;
  input.value = '';
});

restar.addEventListener('click', function() {
  const numero = parseFloat(input.value);
  resolt = fncRestar(resolt, numero);
  resultados.innerText = resolt;
  input.value = '';
});