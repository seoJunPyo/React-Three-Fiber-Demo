import React from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeRenderer from './ThreeRenderer';

function App() {
	return (
		<div className="w-full h-screen">
			<Canvas>
				<ThreeRenderer />
			</Canvas>
		</div>
	);
}

export default App;
