import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import MovieDetails from '../movieDetails/MovieDetails';
import Movies from '../movies/Movies';
import "./MovieList.css"

const MovieList = () => {
    
    //declaring state to show card data
    const [movies, setMovies] = useState([]);
     //declaring state to show order details
    const [details, setDetails] = useState([]);
     //declaring state to show data after searching by name
    const [displayMovies, setDisplayMovies] = useState([]);

    useEffect(() => {
        fetch("./filmfakedb.json")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setDisplayMovies(data);
            });
    }, [])
    
    const handleDetails = movies => {
        const newMovies = [...details, movies]
        setDetails(newMovies);
        console.log("clicked");
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayMovies(matchedMovies);
    }

    return (
        <div>
            <div>
                <Header handleSearch={handleSearch}></Header>
            </div>
            <div className="container card-area">
                <div className="row">
                    {/* product load  */}
                    <div className="col-md-9" >
                            <div className="row">
                            {
                             displayMovies.map(movie =><Movies key = {movie.key} movie={movie} handleDetails = {handleDetails}></Movies>)   
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