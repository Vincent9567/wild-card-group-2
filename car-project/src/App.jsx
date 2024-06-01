import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import "./App.css";
import { useState } from "react";
import { Text3D } from "@react-three/drei";

function App() {
  const [lapCount, setLapCount] = useState(0);
  const handleLapCount = () => {
    setLapCount((lapCount) => lapCount + 1);
  };

  return (
    <>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene handleLaps={handleLapCount} />
        </Physics>
        {lapCount > 3 && (
          <Text3D
            font="./assets/fonts/1.json"
            position={[-10, 5, -30]}
            scale={10}
          >
            You Win!
            <meshNormalMaterial />
          </Text3D>
        )}
      </Canvas>
      {lapCount >= 0 && lapCount <= 2 ? (
        <h1>Lap Count: {lapCount}</h1>
      ) : (
        <h1>Final Lap</h1>
      )}
    </>
  );
}

export default App;
