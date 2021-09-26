import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import MovieDetails from '../movieDetails/MovieDetails';
import Movies from '../movies/Movies';
import "./MovieList.css"

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("./filmfakedb.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])
    
    const handleDetails = movies => {
        const newMovies = [...details, movies]
        setDetails(newMovies);
        console.log("clicked");
    }

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="container card-area">
                <div className="row">
                    {/* product load  */}
                    <div className="col-md-9" >
                            <div className="row">
                            {
                             movies.map(movie =><Movies key = {movie.key} movie={movie} handleDetails = {handleDetails}></Movies>)   
                            }
                            </div>
                    </div>
                    <div className="col-md-3" >
                        {/* details load */}
                      <MovieDetails details={details}></MovieDetails>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieList;