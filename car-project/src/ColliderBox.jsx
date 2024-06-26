import { useBox } from "@react-three/cannon";

const debug = true;

export function ColliderBox({ position, scale }) {
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
    collisionFilterGroup: 1,
    collisionFilterMask: 4,
  }));

  return (
    debug && (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    )
  );
}
