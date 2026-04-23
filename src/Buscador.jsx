import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Buscador.css'

function Buscador({tituloABuscar}) {

  const [error,setError] = useState(false)
  const [peliculas,setPeliculas] = useState([])

  useEffect(() => {
      fetch(`https://www.omdbapi.com/?s=${tituloABuscar}&apikey=cd584c9c`)
      .then(response => response.json())
      .then(data => {
        setPeliculas(data)
      })
      .catch(error => {
        console.error(error)
        setError(true)
     });
    }, [tituloABuscar])

    if(error)
      return(
        <div className='errorBusqueda'>
          <h2>Buscando: {tituloABuscar}</h2>
          <p>Ocurrió un error al buscar: {tituloABuscar}</p>    
        </div>
      )

    if(peliculas.Response === 'False' || !peliculas.Search)
      return(
        <div className='sinResultadosBusqueda'>
          <h2>Buscando: {tituloABuscar}</h2>
          <p>No se encontraron resultados para: {tituloABuscar}</p>    
        </div>
      )

    return(
      <>
      <div className='buscador'>
        <h2>Buscando: {tituloABuscar}</h2>
        {peliculas.Search.map((pelicula) => (
          <div key={pelicula.imdbID} className='pelicula'>
            <h3>{pelicula.Title}</h3>
            <p>Año: {pelicula.Year}</p>
            <img src={pelicula.Poster} alt={`Poster de ${pelicula.Title}`} onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/notFound.png';
            }} />
          </div>
        ))}
      </div>
      </>

    )
  }



export default Buscador
