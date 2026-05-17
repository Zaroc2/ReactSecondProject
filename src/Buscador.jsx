import { useEffect, useState } from 'react'
import PeliculaItem from './PeliculaItem.jsx'
import './Buscador.css'


function Buscador({tituloABuscar}) {

  const [error,setError] = useState(false)
  const [peliculas,setPeliculas] = useState([])
  const [pelicula,setPelicula] = useState(null)
  const [cargando,setCargando] = useState(true)
  const [indicePagina,setIndicePagina] = useState(1)

  useEffect(() => {
      setCargando(true)
      fetch(`https://www.omdbapi.com/?s=${tituloABuscar}&apikey=cd584c9c&page=${indicePagina}`)
      //fetch(`https://www.omdbapi.com/?s=${tituloABuscar}&apikey=ba471789&page=${indicePagina}`)
      .then(response => response.json())
      .then(data => {
        setPeliculas(data)
      })
      .catch(error => {
        console.error(error)
        setError(true)
     });
     setCargando(false)
     window.scrollTo({ top: 0, behavior: 'smooth' }); // Para que suba al inicio de pagina, 'smooth' para animación, o 'auto' para instantáneo
    }, [tituloABuscar,indicePagina])
    
    useEffect(() => {
      setIndicePagina(1)
    }, [tituloABuscar])

    if(cargando)
      return(
        <div className='cargandoBusqueda'>
          <h2>Buscando: {tituloABuscar}</h2>
          <p>Cargando resultados...</p>    
        </div>
      )

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
          <button id="botonAnterior" disabled={indicePagina === 1} onClick={() => setIndicePagina(indicePagina - 1)}>&lt;</button>
          <strong>.. {indicePagina} ..</strong>
          <button id="botonSiguiente" disabled={peliculas.Search.length < 10} onClick={() => setIndicePagina(indicePagina + 1)}>&gt;</button>
        </div>
      </div>
      </>

    )
    //El disabled={indicePagina === 1} se debe poner la comprobacion ahiporque si se hace afuera React no se da cuenta del cambio, o, si se hace afuera imagino que seria mas engorroso
  }



export default Buscador
