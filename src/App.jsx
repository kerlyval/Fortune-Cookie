// App.jsx
import { useState, useEffect } from 'react';
import {
	bg20,
	bg18,
	bg22,
	bg24,
	bg26,
	bg27,
	bg31,
	bg33,
	bg34,
} from './assets/images/'; // Asegúrate de que estas imágenes existan

import phrases from './phrases.json'; // Verifica que phrases.json esté en la ruta correcta
import './App.css';
import SpinLoader from './components/SpinLoader'; // Asegúrate de que el nombre del archivo coincida

const images = [bg20, bg18, bg22, bg24, bg26, bg27, bg31, bg33, bg34];

function randomIndex(max) {
	return Math.floor(Math.random() * max);
}

function App() {
	const [loading, setLoading] = useState(true);
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	// Simular la carga de datos
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Cambiar a false después de 3 segundos
		return () => clearTimeout(timer);
	}, []);

	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				{/* Encabezado */}
				<h1 className="heading">{/* Galletas de la <br /> Fortuna */}</h1>

				{/* Contenido */}
				{loading ? (
					<SpinLoader />
				) : (
					<div className="card">
						<div className="card__body">
							<q className="phrase">{phrase.phrase}</q>
							<cite className="author">
								- <b>{phrase.author}</b>
							</cite>
						</div>
					</div>
				)}

				{/* Botón */}
				{!loading && (
					<button onClick={changePhrase} className="btn">
						Abre otra
					</button>
				)}
			</div>
		</div>
	);
}

export default App;
