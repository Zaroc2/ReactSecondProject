import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [pelicula,setPelicula] = useState(null)


  return(

    <>
    
    <h1>El mejor buscador de pelis!</h1>
    <input onChange={(e) => { setPelicula(e.target.value) }}></input>

    <p>{pelicula}</p>

    </>

  )

}

export default App
