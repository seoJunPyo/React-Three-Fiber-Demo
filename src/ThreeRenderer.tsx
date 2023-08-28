import React from 'react';
import { useFrame, ThreeElements, MeshProps } from '@react-three/fiber';
import { Mesh } from 'three/src/objects/Mesh.js';

const ThreeRenderer = () => {
	const meshRef = React.useRef<Mesh>(null);
	useFrame((state, delta) => {
		if (!meshRef.current) return;

		meshRef.current.rotation.y += delta;
	});

	return (
		<>
			<directionalLight position={[1, 1, 1]} />
			<mesh ref={meshRef} rotation={[0, (45 * Math.PI) / 180, 0]}>
				<boxGeometry />
				<meshStandardMaterial color="#e67e22" />
			</mesh>
		</>
	);
};

export default ThreeRenderer;
