import React from "react";
import {
	Environment,
	MeshPortalMaterial,
	RoundedBox,
	useTexture,
} from "@react-three/drei";

import * as THREE from "three";

export const Portals = ({ children, texture, ...props }) => {
	const map = useTexture(texture);

	return (
		<group {...props}>
			<RoundedBox args={[9, 12, 0.1]} radius={0.1} position={[0, 0, 0]}>
				<MeshPortalMaterial side={THREE.DoubleSide}>
					<ambientLight intensity={1} />
					<Environment preset="sunset" />
					{children}

					<mesh>
						<sphereGeometry args={[100, 64, 64]} />
						<meshStandardMaterial map={map} side={THREE.DoubleSide} />
					</mesh>
				</MeshPortalMaterial>
			</RoundedBox>
		</group>
	);
};