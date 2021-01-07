import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
const MovieCards = (props) => {
    return (
        <>
        {props.movies.map(movie => {
            return <MovieCard title={movie} />
        })}
         </>
    )
}

export default MovieCards