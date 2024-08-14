import { Text3D } from "@react-three/drei";
import { Treeanimate } from "./Treeanimate";

export const TreeText = (treeName, props) => {
	console.log(props)
	return (
		<>
			<Text3D
				curveSegments={32}
				bevelEnabled
				bevelSize={0.04}
				bevelThickness={0.1}
				height={0.5}
				lineHeight={0.5}
				letterSpacing={-0.06}
				size={1.5}
				font="../public/fonts/Inter_Bold.json"
			>
				{treeName}
				<meshNormalMaterial />
			</Text3D>
		</>
	);
};
