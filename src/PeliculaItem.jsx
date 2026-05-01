import { useEffect, useState } from 'react';
import './PeliculaItem.css'

function App({ pelicula }) {

  const [peliculaDetails, setPeliculaDetails] = useState(null)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${pelicula.imdbID}&apikey=cd584c9c`)
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
            <h3>{pelicula.Title}</h3>
            <p>Fecha de lanzamiento: {peliculaDetails ? peliculaDetails.Released : 'Cargando...'}</p>
            <img src={pelicula.Poster} alt={`Poster de ${pelicula.Title}`} onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/notFound.png';
            }} />
            <p>Sinopsis: {peliculaDetails ? peliculaDetails.Plot : 'Cargando...'}</p>
            <p>Director: {peliculaDetails ? peliculaDetails.Director : 'Cargando...'}</p>
            <p>Género: {peliculaDetails ? peliculaDetails.Genre : 'Cargando...'}</p>
            <p>Actores: {peliculaDetails ? peliculaDetails.Actors : 'Cargando...'}</p>
            <p>Duración: {peliculaDetails ? peliculaDetails.Runtime : 'Cargando...'}</p>
            <p>Rating: {peliculaDetails ? peliculaDetails.imdbRating : 'Cargando...'}</p>
            <p>Votos: {peliculaDetails ? peliculaDetails.imdbVotes : 'Cargando...'}</p>
            <p>Idioma: {peliculaDetails ? peliculaDetails.Language : 'Cargando...'}</p>
            <p>País: {peliculaDetails ? peliculaDetails.Country : 'Cargando...'}</p>
            <p>Premios: {peliculaDetails ? (peliculaDetails.Awards === 'N/A' ? 'No registrados' : peliculaDetails.Awards) : 'Cargando...'}</p>
          </div>
    </>
 
   )

    

    }

export default App
