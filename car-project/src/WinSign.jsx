import { useRef } from "react";
import { useBox } from "@react-three/cannon";

function BoxTrigger({ args, onCollideEnd, position }) {
  const [ref] = useBox(
    () => ({
      args,
      isTrigger: true,
      onCollideEnd,
      position,
      collisionFilterGroup: 2,
      collisionFilterMask: 4,
    }),
    useRef(null)
  );
  return (
    <mesh {...{ position, ref }}>
      <boxGeometry args={args} />
      <meshStandardMaterial transparent={true} opacity={0} />
    </mesh>
  );
}

export default BoxTrigger;

// position: [9.5, 0.5, 1]
