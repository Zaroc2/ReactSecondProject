import { useEffect, useState } from 'react';
import './PeliculaItem.css'

function App({ pelicula }) {

  const [peliculaDetails, setPeliculaDetails] = useState(null)

  useEffect(() => {
    //fetch(`https://www.omdbapi.com/?i=${pelicula.imdbID}&apikey=cd584c9c`)
    fetch(`https://www.omdbapi.com/?i=${pelicula.imdbID}&apikey=ba471789`)

      .then(response => response.json())
      .then(data => {
        setPeliculaDetails(data)
      })
    }, [])

    //Aqui, como React crea "instancias" distintas de un objeto si se llama por un map, basta con que se llame sólo cuando se crea el componente ([]), sin embargo, si fuera otro caso
    //entonces si haría falta por ejemplo en vez de ponerlo vacio, hacerlo cada que cambie el pelicula.imdbID por ejemplo.

  return(

    <>

    <div key={pelicula.imdbID} className='pelicula'>
            <img src={pelicula.Poster} alt={`Poster de ${pelicula.Title}`} onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/notFound.png';
            }} />
            <h2>{pelicula.Title}</h2>
            <span>
              <p><b>Sinopsis:</b> {peliculaDetails ? peliculaDetails.Plot : 'Cargando...'}</p>
              <p><b>Rating:</b> {peliculaDetails ? peliculaDetails.imdbRating : 'Cargando...'}</p>
              <p><b>Votos:</b> {peliculaDetails ? peliculaDetails.imdbVotes : 'Cargando...'}</p>
              <p><b>Género:</b> {peliculaDetails ? peliculaDetails.Genre : 'Cargando...'}</p>
              <p><b>Fecha de lanzamiento:</b> {peliculaDetails ? peliculaDetails.Released : 'Cargando...'}</p>
              <p><b>Duración:</b> {peliculaDetails ? peliculaDetails.Runtime : 'Cargando...'}</p>
              <p><b>Premios:</b> {peliculaDetails ? (peliculaDetails.Awards === 'N/A' ? 'No registrados' : peliculaDetails.Awards) : 'Cargando...'}</p>
              <p><b>Director:</b> {peliculaDetails ? peliculaDetails.Director : 'Cargando...'}</p>
              <p><b>Actores:</b> {peliculaDetails ? peliculaDetails.Actors : 'Cargando...'}</p>
              <p><b>Idioma:</b> {peliculaDetails ? peliculaDetails.Language : 'Cargando...'}</p>
              <p><b>País:</b> {peliculaDetails ? peliculaDetails.Country : 'Cargando...'}</p>
              <p><a href={`https://www.youtube.com/results?search_query=${pelicula.Title} trailer`} target="_blank" rel="noopener noreferrer">Buscar Trailer en YouTube</a></p>
              <p><a href={`https://www.1shows.org/search?query=${pelicula.Title}`} target="_blank" rel="noopener noreferrer">Buscar película en 1show </a></p>
              <p><a href={`https://www.opensubtitles.com/es/es/search-all/q-${pelicula.Title}/hearing_impaired-include/machine_translated-/trusted_sources-`} target="_blank" rel="noopener noreferrer">Buscar subtítulos</a></p>
            </span>
            
          </div>
    </>
 
   )

    

    }

export default App
