import React, { useEffect } from 'react';
import './Nav.css';

function Nav() {
	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 600) {
				document.querySelector('.nav').classList.add('show');
			} else document.querySelector('.nav').classList.remove('show');
			return () => {
				window.removeEventListener('scroll');
			};
		};
	}, []);
	return (
		<div className='nav'>
			<img
				className='nav__logo'
				src='https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png'
				alt='Netflix Logo'
			/>
			<img
				className='nav__profile'
				src='https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg'
				alt='Netflix Logo'
			/>
			<ul className='nav__links'>
				<li>Home</li>
				<li>Tv Shows</li>
				<li>Movies</li>
				<li>Latest</li>
			</ul>
		</div>
	);
}

export default Nav;
