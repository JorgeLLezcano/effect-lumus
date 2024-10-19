import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const API = 'https://dragonball-api.com/api/characters?limit=45'

  function displayCharacter(index) {
      fetch(API)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.items)
    })

  }
useEffect(() => {
  displayCharacter(currentIndex)
}, [])

  return (
    <>
     <div className='wrapp'>
    { 
   
      
     characters.map((character)=>(
      <div className='card'>
      <img src={character.image} alt={character.name} />
      </div>
          )

      )
    
       }
       </div> 
    </>
  )
}

export default App
