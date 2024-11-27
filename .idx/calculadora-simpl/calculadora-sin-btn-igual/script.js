// const input=document.querySelector('input')
// const sumar=document.getElementById('sumar')
// const restar=document.getElementById('restar')
//  const resultados=document.getElementById('resultados')
//  let resolt=null
// resultados.innerText=resolt




//  function fcnSumar(num, num2){
//   let num1= parseFloat(num)
//   let numDos=parseFloat(num2)

//   return num1+ numDos

//  }

//  function fcnRestar(num, num2){
//    let num1= parseFloat(num)
//   let numDos=parseFloat(num2)

//   return num1-numDos
//  }

//  input.addEventListener('click', function(){
//  if(input.value===''){

//  }
  
//  })

// sumar.addEventListener('click', function(){
//  const number=parseFloat(input.value)
//   if(!isNaN(number)){
//   if(resolt===null){
   

//     resolt=number
//     input.value=''
//   }else{
   
//     resolt=fcnSumar(number, resolt)
//     resultados.innerText=resolt
//   }
   
//    resultados.innerText=resolt
//    input.value=''
//   }
// })

// restar.addEventListener('click', function(){
//   const number=parseFloat(input.value);
//   if(!isNaN(number)){
//   if(resolt===null){
    
//     resolt=number
//      input.value=''
//   }else{
    
//    resolt=fcnRestar(number, resolt)
//     resultados.innerText=resolt
  
//   }
  
//    input.value=''
//   }
// })
const input= document.querySelector('input')
const sumar=document.getElementById('sumar')
const restar=document.getElementById('restar')
const resultados=document.getElementById('resultados')

let operacion=null
let resolt=0


function fcnSumar(params, params2){ 
 return parseFloat(params)+parseFloat(params2)
}
function fcnRestar(params, params2){
 return parseFloat(params)-parseFloat(params2)
}

sumar.addEventListener('click',function(){
  operacion='sumar'
  input.value=''
  input.focus();
})
restar.addEventListener('click',function(){
  operacion='restar'
  input.value=''
  input.focus();
})

input.addEventListener('input', function(){
let number=parseFloat(input.value)
resolt=number
 if (!isNaN(number)) {
if(operacion==='sumar'){
 resolt= fcnSumar(number,resolt)

}else if(operacion==='restar'){
  resolt= fcnRestar(number,resolt)
}
   resultados.innerText=resolt 
operacion=null
input.value=''
 }
})