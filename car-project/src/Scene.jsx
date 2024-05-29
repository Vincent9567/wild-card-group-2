import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect, useState } from 'react'
import { Track } from "./Track"
import { Kart } from "./Kart"

export function Scene() {
    const [thirdPerson, setThirdPerson] = useState(true);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21])

    useEffect(() => {
        function keydownHandler(e) {
          if (e.key == "k") {
            // random is necessary to trigger a state change
            if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
            setThirdPerson(!thirdPerson); 
          }
        }
    
        window.addEventListener("keydown", keydownHandler);
        return () => window.removeEventListener("keydown", keydownHandler);
      }, [thirdPerson]);

  return (
    <>
      <Suspense fallback={null}>
        <Environment files="./assets/textures/clouds_anime_6k.jpg" background blur={0.5} />

        <PerspectiveCamera makeDefault position={cameraPosition} fov={80} />
        {!thirdPerson && (
            <OrbitControls target={[-2.64, -0.71, 0.03]} />
        )}

        <Track />
        <Kart thirdPerson={thirdPerson} />
      </Suspense>
      <directionalLight
        castShadow
        color={"#f3d29a"}
        intensity={2}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />
    </>
  )
}
