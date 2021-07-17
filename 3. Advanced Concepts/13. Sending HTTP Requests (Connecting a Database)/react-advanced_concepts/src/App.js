import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchMoviesHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);

      try {
         // const response = await fetch('https://swapi.dev/api/film/');   // Trigger error in HTTP request.
         const response = await fetch('https://swapi.dev/api/films/');
         // const response = await fetch('https://react-http-6b4a6.firebased.io.com/movies.json');    // Using a Firebase service for storing data

         if(!response.ok) {
            throw new Error('Something went wrong');
         };

         const data = await response.json();

         // Fetching from SWAPI API:
         const transformedMovies = data.results.map((movieData) => {
            return {
               id: movieData.episode_id,
               title: movieData.title,
               openingText: movieData.opening_crawl,
               releaseDate: movieData.release_date 
            };
         });

         // Fetching from Firebase Database API:
         // const loadedMovies = [];
         // for(const key in data) {
         //    loadedMovies.push({
         //       id: key,
         //       title: data[key].title,
         //       openingText: data[key].openingText,
         //       releaseDate: data[key].releaseDate
         //    });
         // };
         // setMovies(loadedMovies);

         setMovies(transformedMovies);
         setIsLoading(false);
      } catch(error) {
         setError(error.message);
      };
      setIsLoading(false);
   }, []);

   useEffect(() => {
      fetchMoviesHandler();
   }, [fetchMoviesHandler]);

   async function addMovieHandler(movie) {
      // console.log(movie);
      const response = await fetch('https://react-http-6b4a6.firebased.io.com/movies.json', {
         method: 'POST',
         body: JSON.stringify(movies)
      });
      const data = await response.json();
      console.log(data);
   };

   let content = <p>No Movies Found.</p>;
   if(movies.length > 0) { content = <MoviesList movies={movies} /> };
   if(error) { content = <p>{error}</p>; };
   if(isLoading) { content = <p>Loading...</p>; };

   return (
      <React.Fragment>
         <section>
            <AddMovie onAddMovie={addMovieHandler}></AddMovie>
         </section>
         <section>
            <button onClick={fetchMoviesHandler}>Fetch Movies</button>
         </section>
         <section>
            {content}
         </section>
      </React.Fragment>
   );
};

export default App;