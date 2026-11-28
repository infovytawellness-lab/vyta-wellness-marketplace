"use client";

import * as THREE from "three";
import { type GLTF } from "three-stdlib";
import { useFrame, type ThreeElements } from '@react-three/fiber'
import { 
    Decal, 
    useGLTF, 
    useTexture 
} from '@react-three/drei';
import { easing } from "maath";
import { useSnapshot } from 'valtio';
import { state } from "@/lib/store/homeStore";

// Served from /public/models
const shirtModel = "/models/shirt_baked_collapsed.glb";

type GLTFResult = GLTF & {
  nodes: { T_Shirt_male: THREE.Mesh };
  materials: { lambert1: THREE.MeshStandardMaterial };
};

const Shirt = (props: ThreeElements["mesh"]) => {
    const snap = useSnapshot(state);
    const texture = useTexture(snap.decal.src);

    const { nodes, materials } = useGLTF(shirtModel) as unknown as GLTFResult;
    useFrame((state, delta) =>
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta),
      );

  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        map={texture}
      />
    </mesh>
  )
}

export default Shirt