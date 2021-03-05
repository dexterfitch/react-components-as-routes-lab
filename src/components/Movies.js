import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie =>
          <div key={movie.title}>
            <p>Title: <b>{movie.title}</b></p>
            <p>Running Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map(genre =>
                <li>{genre}</li>
              )}
            </ul>
          </div>
        )}
    </div>
  );
};

export default Movies;
