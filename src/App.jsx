import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [-100, 10, 100], fov: 30 } }>
      <color attach="background" args={["#BCF5A9"]} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.9} color="white" position={[0, 10, 10]} />
      <Experience />
    </Canvas>
  );
}

export default App;
