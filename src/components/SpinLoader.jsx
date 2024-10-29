import { useEffect, useState } from 'react';
import './SpinLoader.css';

export default function SpinLoader() {
	const [text, setText] = useState('');

	const [showImg, setShowImg] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowImg(false);
			setText('Welcome to the Fortune cookie');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="loader">
			{showImg ? (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h3 style={{ marginLeft: '10px' }}> Tu galleta de la suerte es</h3>
					<img
						src="spinner.svg"
						alt="Loading..."
						style={{ width: '100px', height: 'auto' }}
					/>
				</div>
			) : (
				<h3>{text}</h3>
			)}
		</div>
	);
}
