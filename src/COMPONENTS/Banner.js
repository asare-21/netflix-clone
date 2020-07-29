import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

function Banner() {
	const [movie, setMovie] = useState([]);
	const [movieD, setMovieD] = useState('');
	const baseUrl = 'https://image.tmdb.org/t/p/original/';
	useEffect(() => {
		async function banner() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			const rand = Math.floor(Math.random() * request.data.results.length - 1);
			setMovie(request.data.results[rand]);
			setMovieD(
				request.data.results[rand].overview.length < 250
					? request.data.results[rand].overview
					: request.data.results[rand].overview.substring(0, 250) + '...'
			);

			// request.data.results.forEach((result) => {
			// 	// console.log(JSON.stringify(result.overview).substring(0, 50));
			// 	JSON.stringify(result.overview).length > 150
			// 		? setMovieD(JSON.stringify(result.overview).substring(0, 50))
			// 		: setMovieD(result.overview + '...');
			// 	setMovieD(result.overview);
			// });
		}
		banner();
	}, []);
	// console.log(JSON.stringify(movie).split(',')[14]);

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${baseUrl}/${movie?.backdrop_path})`,
				backgroundPosition: 'center     center'
			}}>
			<div className='banner__content'>
				{/* title */}
				<h1 className='banner__title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				{/* div > buttons > controls */}
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List </button>
				</div>
				<h1 className='banner__description'>{movieD}</h1>
			</div>
			<div className='banner__fadeBottom'></div>
		</header>
	);
}

export default Banner;
