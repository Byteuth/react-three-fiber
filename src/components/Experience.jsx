import React from "react";
import {
	Environment,
	OrbitControls,
	KeyboardControls,
} from "@react-three/drei";
import { Animatedoak } from "./Animatedoak";
import { Cherryblossom } from "./Cherryblossom";
import { Mapletree } from "./Mapletree";
import { Mightoak } from "./Mightoak";
import { Treeanimate } from "./Treeanimate";
import { Portals} from "./Portals"
import { TreeText} from "./TreeText"

// Define maxForce and rotationSpeed outside of the component
const maxForce = 0.8;
const rotationSpeed = 0.08;


export const Experience = () => {
	const treeComponents = [
		Animatedoak,
		Cherryblossom,
		Mapletree,
		Mightoak,
		Treeanimate,
	];

	const numPortals = 30;
	const portals = [];

	for (let i = 0; i < numPortals; i++) {
		const randomIndex = Math.floor(Math.random() * treeComponents.length);
		const randomTree = treeComponents[randomIndex];
		const positionX = i * 10 - (numPortals - 1) * 2;
		portals.push({
			tree: randomTree,
			positionX,
		});
	}

	const keyboardMap = [
		{ name: "forward", keys: ["ArrowUp", "w", "W"] },
		{ name: "backward", keys: ["ArrowDown", "s", "S"] },
		{ name: "left", keys: ["ArrowLeft", "a", "A"] },
		{ name: "right", keys: ["ArrowRight", "d", "D"] },
		{ name: "jump", keys: ["Space"] },
	]

	return (
		<KeyboardControls
			map={keyboardMap}
		>
			<ambientLight intensity={0.5} />
			<Environment preset="sunset" />
			<OrbitControls />
			{portals.map((portal, index) => (
				<Portals
					key={index}
					texture="/textures/posz.png"
					position-x={portal.positionX}
					position-z={-2}
				>
					<portal.tree scale={0.1} position-y={-6} position-z={-4} />
				</Portals>
			))}
			{/* <TreeText/> */}
			<mesh position={[80, -13, 12]}>
				<planeGeometry args={[300, 14]} />
				<meshStandardMaterial color="gray" />
			</mesh>
			<mesh position={[80, -6, 4.9]} rotation-x={-Math.PI / 2}>
				<planeGeometry args={[300, 14]} />
				<meshStandardMaterial color="gray" />
			</mesh>
		</KeyboardControls>
	);
};


// Movement logic for the car
const moveVehicle = (car) => {
	const { forward, backward, leftward, rightward } = car.controls;

	const delta = forward ? maxForce : backward ? -maxForce : 0;

	if (leftward) car.rotation.y += rotationSpeed;
	if (rightward) car.rotation.y -= rotationSpeed;

	car.translateZ(delta);
};
