import React from 'react';
import "./App.css"

const MovieList = (props) => {


	return (
		<>
		<div className='container'>
			{props.movies.map((movie, index) => (
				<div className='item'>
					<img src={movie.Poster} alt='movie'></img>
					
				</div>
			))}
			</div>
		</>
	);
};

export default MovieList;