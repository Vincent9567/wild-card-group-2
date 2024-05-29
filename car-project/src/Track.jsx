import { useGLTF } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import { ColliderBox } from "./ColliderBox";

export function Track(props) {
    const { nodes, materials } = useGLTF('./assets/models/track.glb')
    const [ref] = usePlane(() => ({type: 'Static', rotation: [-Math.PI / 2, 0, 0], ...props}))

  return (
    <>
      <group {...props} dispose={null}>
        <group ref={ref} receiveShadow>
            <mesh geometry={nodes.Object_2.geometry} material={materials.LINEAS} />
            <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Object_14.geometry} material={materials['Material.013']} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.015']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['Material.016']} />
            <mesh geometry={nodes.Object_18.geometry} material={materials['Material.017']} />
            <mesh geometry={nodes.Object_19.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.019']} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['Material.021']} />
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.023']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.024']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['Material.031']} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['Material.032']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.034']} />
            <mesh geometry={nodes.Object_27.geometry} material={materials['Material.035']} />
            <mesh geometry={nodes.Object_28.geometry} material={materials['Material.036']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials['Material.037']} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['Material.038']} />
            <mesh geometry={nodes.Object_31.geometry} material={materials['Material.039']} />
            <mesh geometry={nodes.Object_32.geometry} material={materials['Material.040']} />
            <mesh geometry={nodes.Object_33.geometry} material={materials['Material.041']} />
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.042']} />
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.043']} />
            <mesh geometry={nodes.Object_36.geometry} material={materials['Material.044']} />
            <mesh geometry={nodes.Object_37.geometry} material={materials['Material.045']} />
            <mesh geometry={nodes.Object_38.geometry} material={materials['Material.046']} />
            <mesh geometry={nodes.Object_39.geometry} material={materials['Material.049']} />
            <mesh geometry={nodes.Object_40.geometry} material={materials['Material.050']} />
            <mesh geometry={nodes.Object_41.geometry} material={materials['Material.051']} />
            <mesh geometry={nodes.Object_42.geometry} material={materials['Material.053']} />
            <mesh geometry={nodes.Object_43.geometry} material={materials['Material.054']} />
            <mesh geometry={nodes.Object_44.geometry} material={materials['Material.055']} />
            <mesh geometry={nodes.Object_45.geometry} material={materials['Material.056']} />
            <mesh geometry={nodes.Object_46.geometry} material={materials['Material.057']} />
            <mesh geometry={nodes.Object_47.geometry} material={materials['Material.059']} />
            <mesh geometry={nodes.Object_48.geometry} material={materials['Material.060']} />
            <mesh geometry={nodes.Object_49.geometry} material={materials['Material.062']} />
            <mesh geometry={nodes.Object_50.geometry} material={materials['Material.063']} />
            <mesh geometry={nodes.Object_51.geometry} material={materials['Material.065']} />
            <mesh geometry={nodes.Object_52.geometry} material={materials['Material.066']} />
            <mesh geometry={nodes.Object_53.geometry} material={materials['Material.067']} />
            <mesh geometry={nodes.Object_54.geometry} material={materials['Material.068']} />
            <mesh geometry={nodes.Object_55.geometry} material={materials['Material.069']} />
            <mesh geometry={nodes.Object_56.geometry} material={materials['Material.072']} />
            <mesh geometry={nodes.Object_57.geometry} material={materials['Material.074']} />
            <mesh geometry={nodes.Object_58.geometry} material={materials['Material.075']} />
            <mesh geometry={nodes.Object_59.geometry} material={materials['Material.076']} />
            <mesh geometry={nodes.Object_60.geometry} material={materials['Material.077']} />
            <mesh geometry={nodes.Object_61.geometry} material={materials['Material.078']} />
            <mesh geometry={nodes.Object_62.geometry} material={materials['Material.079']} />
            <mesh geometry={nodes.Object_63.geometry} material={materials['Material.081']} />
            <mesh geometry={nodes.Object_64.geometry} material={materials['Material.083']} />
            <mesh geometry={nodes.Object_65.geometry} material={materials['Material.084']} />
            <mesh geometry={nodes.Object_66.geometry} material={materials['Material.085']} />
            <mesh geometry={nodes.Object_67.geometry} material={materials['Material.087']} />
            <mesh geometry={nodes.Object_68.geometry} material={materials['Material.088']} />
            <mesh geometry={nodes.Object_69.geometry} material={materials['Material.090']} />
            <mesh geometry={nodes.Object_70.geometry} material={materials['Material.091']} />
            <mesh geometry={nodes.Object_71.geometry} material={materials['Material.092']} />
            <mesh geometry={nodes.Object_72.geometry} material={materials['Material.093']} />
            <mesh geometry={nodes.Object_73.geometry} material={materials['Material.094']} />
            <mesh geometry={nodes.Object_74.geometry} material={materials['Material.096']} />
            <mesh geometry={nodes.Object_75.geometry} material={materials['Material.097']} />
            <mesh geometry={nodes.Object_76.geometry} material={materials['Material.098']} />
            <mesh geometry={nodes.Object_77.geometry} material={materials['Material.099']} />
            <mesh geometry={nodes.Object_78.geometry} material={materials.amarillo} />
            <mesh geometry={nodes.Object_79.geometry} material={materials['amarillo.001']} />
            <mesh geometry={nodes.Object_80.geometry} material={materials.azul} />
            <mesh geometry={nodes.Object_81.geometry} material={materials['azul.001']} />
            <mesh geometry={nodes.Object_82.geometry} material={materials.gris} />
            <mesh geometry={nodes.Object_83.geometry} material={materials.negro} />
            <mesh geometry={nodes.Object_84.geometry} material={materials.rojo} />
            <mesh geometry={nodes.Object_85.geometry} material={materials['tierra.001']} />
            <mesh geometry={nodes.Object_86.geometry} material={materials.verde} />
            <mesh geometry={nodes.Object_87.geometry} material={materials['verde.001']} />
            <mesh geometry={nodes.Object_88.geometry} material={materials['verde.002']} />
            <mesh geometry={nodes.Object_89.geometry} material={materials['Material.026']} />
            <mesh geometry={nodes.Object_90.geometry} material={materials['Material.027']} />
            <mesh geometry={nodes.Object_91.geometry} material={materials['Material.028']} />
            <mesh geometry={nodes.Object_92.geometry} material={materials['Material.029']} />
            <mesh geometry={nodes.Object_93.geometry} material={materials['Material.030']} />
            <mesh geometry={nodes.Object_94.geometry} material={materials['Material.080']} />
            <mesh geometry={nodes.Object_95.geometry} material={materials['Material.064']} />
            <mesh geometry={nodes.Object_96.geometry} material={materials['Material.070']} />
            <mesh geometry={nodes.Object_97.geometry} material={materials['Material.071']} />
            <mesh geometry={nodes.Object_98.geometry} material={materials['Material.048']} />
            <mesh geometry={nodes.Object_99.geometry} material={materials['Material.086']} />
            <mesh geometry={nodes.Object_100.geometry} material={materials['Material.089']} />
            <mesh geometry={nodes.Object_101.geometry} material={materials.palette} />
        </group>
            {/* bounds */}
            <ColliderBox position={[12.5, 0, -1.15]} scale={[1, 30, 30]} />
            <ColliderBox position={[-12.5, 0, -1.15]} scale={[1, 30, 30]} />
            <ColliderBox position={[1, 1, -12.5]} scale={[30, 30, 1]} />
            <ColliderBox position={[1, 1, 12.5]} scale={[30, 30, 1]} />

            {/* inner */}
            <ColliderBox position={[-0.45, 1.75, 1.15]} scale={[14, 30, 1]} />
    </group>
    </>
  );
}

useGLTF.preload('/track.glb')