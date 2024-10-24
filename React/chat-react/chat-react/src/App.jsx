import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <>
       <main>
       
        <svg viewBox="100 100 400 400" xmlns="http://www.w3.org/2000/svg"
        height="150px"
        >
            <text
              text-anchor="middle"
              dominant-baseline="middle"
              font-family="italic"
              font-weight="bold"
              x="300"
              y="250"
              transform-origin="400 400"
              fill="white"
              stroke="white"
              stroke-width="4"
              font-size="200"
            > 
           chat </text>
          </svg>
   
   
    <div id="messages">
    <ul>

       
    </ul>

</div>
    <form action="">
       
        <input type="text" placeholder="escribe mensaje..."/>
        <button type="submit">enviar</button>
        
    </form>
    </main>
    </>
  )
}

export default App
