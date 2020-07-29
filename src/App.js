import React from 'react';
import Row from './COMPONENTS/Row';
import requests from './requests';
import Banner from './COMPONENTS/Banner';
import Nav from './COMPONENTS/Nav';
// import Footer from './COMPONENTS/Footer';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Banner />
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;