import React,  { useState, useEffect } from 'react';
import './App.css';
import Movie from './Components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=9abece2b3fd2ebefc230ea2ce46c4bef&language=en-US&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=9abece2b3fd2ebefc230ea2ce46c4bef&language=en-US&page=1&include_adult=false&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchHandler = (event) =>{
    event.preventDefault();
    if(searchTerm){

      fetch(SEARCH_API + searchTerm)
      .then( res => res.json())
      .then(data => {
        setMovies(data.results);
      })

      setSearchTerm('');
    }
    
  }
  return (
    <div>
        <header>
          <form onSubmit={searchHandler}>
            <input 
              type="search" 
              placeholder="search" 
              className="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}/>
          </form>
          
        </header>
        <div className="movie__container">
          {movies.length > 0 && movies.map(movie => (
              <Movie key={movie.id} {...movie}/>
          ))}
        </div>
    </div>  
  );
}

export default App;
