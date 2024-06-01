import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Track } from "./Track";
import { Kart } from "./Kart";
import BoxTrigger from "./WinSign";

export function Scene({ handleLaps }) {
  const [thirdPerson, setThirdPerson] = useState(true);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "k") {
        // random is necessary to trigger a state change
        if (thirdPerson)
          setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
        setThirdPerson(!thirdPerson);
      }
    }

    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [thirdPerson]);


  return (
    <>
      <Suspense fallback={null}>
        <Environment
          files="./assets/textures/envmap.hdr"
          background
          blur={0.5}
        />

        <PerspectiveCamera makeDefault position={cameraPosition} fov={100} />
        {!thirdPerson && <OrbitControls target={[-2.64, -0.71, 0.03]} />}

        <Track />

        <Kart thirdPerson={thirdPerson} />
        <BoxTrigger
          args={[5, 1, 0.5]}
          onCollideEnd={() => {
            handleLaps();
            console.log("lap");
          }}
          position={[9.5, 0.5, 1]}
        />
      </Suspense>
    </>
  );
}
