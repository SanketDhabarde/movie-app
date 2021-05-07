import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w500";

function Movie({title, poster_path, overview, vote_average}) {
    const setClassName = (vote) => {
        if(vote>=8){
            return "green";
        }else if(vote>=6){
            return "orange";
        }else{
            return "red";
        }
    }

    return (
        <div className="movie">
            <img src={poster_path ? IMAGE_API + poster_path : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80'} alt={title}/>
            <div className="movie__info">
                <h3>{title}</h3>
                <span className={`tag ${setClassName(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie__overview">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie
