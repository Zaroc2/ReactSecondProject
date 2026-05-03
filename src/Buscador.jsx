import { useEffect, useState } from 'react'
import PeliculaItem from './PeliculaItem.jsx'
import './Buscador.css'


function Buscador({tituloABuscar}) {

  const [error,setError] = useState(false)
  const [peliculas,setPeliculas] = useState([])
  const [pelicula,setPelicula] = useState(null)
  const [indicePagina,setIndicePagina] = useState(0)

  useEffect(() => {
      //fetch(`https://www.omdbapi.com/?s=${tituloABuscar}&apikey=cd584c9c`)
      fetch(`https://www.omdbapi.com/?s=${tituloABuscar}&apikey=ba471789`)
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


          <PeliculaItem key={pelicula.imdbID} pelicula={pelicula} />
          
        ))}
        <div id='paginacion'>
          <button disabled="false" onClick={

            

          }>&lt;</button>
          
          <button >&gt;</button>
        </div>
      </div>
      </>

    )
  }



export default Buscador
