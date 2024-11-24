const input = document.querySelector('input');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const igual = document.getElementById('igual');
const resultados = document.getElementById('resultados');
const borrar=document.getElementById('deleat')
let firsNum = null;
let operacion = null;
let numero = null;

input.addEventListener('input', function () {
  if (input.value === '') {
    resultados.innerText = '';
  }
});
function deleat(){
  input.value='';
  resultados.innerText='';
}
function fncSuma(params, paramsDos) {
  const numUno = parseFloat(params);
  const numbDos = parseFloat(paramsDos);
  return numUno + numbDos;
}

function fncRestar(params, paramsDos) {
  const numUno = parseFloat(params);
  const numbDos = parseFloat(paramsDos);
  return numUno - numbDos;
}

sumar.addEventListener('click', function() {
  if (firsNum === null) {
    firsNum = parseFloat(input.value);
    resultados.innerText = firsNum;
    input.value = '';
  }
  operacion = 'suma';
});

restar.addEventListener('click', function() {
  if (firsNum === null) {
    firsNum = parseFloat(input.value);
    resultados.innerText = firsNum;
    input.value = '';
  }
  operacion = 'resta';
});

igual.addEventListener('click', function() {
  if (input.value !== '') {
    numero = parseFloat(input.value);
    input.value = '';
    if (operacion === 'suma') {
      const resultado = fncSuma(firsNum, numero);
      resultados.innerText = resultado;
      firsNum = resultado;
    } else if (operacion === 'resta') {
      const resultado = fncRestar(firsNum, numero);
      resultados.innerText = resultado;
      firsNum = resultado;
    }
  }
});

borrar.addEventListener('click',deleat)