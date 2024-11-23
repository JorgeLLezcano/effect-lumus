const input= document.querySelector('input')
const sumar= document.getElementById('sumar')
const restar=document.getElementById('restar')
const resultados= document.getElementById('resultados')
let firsNum= null

input.addEventListener('input', function() {
  if (input.value === '') {
    resultados.innerText = ''; 
  }
});

function fncSuma(params, paramsDos){
  const numUno =parseFloat(params)
  const numbDos= parseFloat(paramsDos)
  return numUno+numbDos
}


function fncRestar(params, paramsDos){
  const numUno =parseFloat(params)
  const numbDos= parseFloat(paramsDos)
  return numUno-numbDos
}

sumar.addEventListener('click',function(){

  if(firsNum===null){
    firsNum=input.value
    resultados.innerText = firsNum;
    input.value=""
  }else{

   const numero=input.value
   resultados.innerText=fncSuma(firsNum, numero)
   firsNum=null
  }

})

restar.addEventListener('click',function(){
  if(firsNum===null){
    firsNum=input.value
     resultados.innerText = firsNum;
     input.value=""
  }else{

   const numero=input.value
   resultados.innerText=fncRestar(firsNum, numero)
   firsNum=null
  }

})


