import React, {useState, useEffect} from 'react'
import './MovieCards.css'
import MovieCard from '../MovieCard/MovieCard'
import axios from 'axios'
const MovieCards = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const API_KEY = process.env.REACT_APP_API

    const searchHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const search = () => {
        console.log(searchTerm)
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${searchTerm}&type=movie`)
        .then(response => {
            console.log(response.data)
            setMovies(response.data.Search)
        })
    }

    return (
        <div>
        <form onSubmit={e => {
            e.preventDefault();
            search();
            }}>
        <input type='text' name='searchTerm' value={searchTerm} onChange={e => searchHandler(e)} />
        </form>
        {movies.map(movie => {
            return <MovieCard title={movie.Title} poster={movie.Poster}/>
        })}
         </div>
    )
}

export default MovieCards