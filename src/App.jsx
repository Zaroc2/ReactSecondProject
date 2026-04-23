import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Buscador from './Buscador.jsx'

function App() {

  const [pelicula,setPelicula] = useState(null)
  const [busqueda,setBusqueda] = useState(false)


  return(

    <>
    
    <h1>El mejor buscador de pelis!</h1>
    <input onChange={(e) => {
     
     if(e.target.value !== ''){
      setBusqueda(true)
      setPelicula(e.target.value)
     }
     /*else
      setBusqueda(false)*/

    }}></input>

    {busqueda && <Buscador tituloABuscar={pelicula}/>}

     </>
 
   )

    

    }

export default App
