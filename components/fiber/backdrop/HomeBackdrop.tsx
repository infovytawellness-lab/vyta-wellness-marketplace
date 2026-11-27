"use client";

import { useRef, type ComponentRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import { 
    AccumulativeShadows, 
    RandomizedLight
} from '@react-three/drei';
import { easing } from "maath";



const HomeBackdrop = () => {
    const shadows = useRef<ComponentRef<typeof AccumulativeShadows>>(null!);
    useFrame((state, delta) => 
        easing.dampC(
            shadows.current.getMesh().material.color as THREE.Color,
            // `state` here is r3f's per-frame state (like in CameraRig below), which
            // has no `color` field — this reads `undefined`, same as upstream.
            (state as unknown as { color: THREE.ColorRepresentation }).color,
            0.25,
            delta,
          ),
    );
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55 * Math.PI}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25 * Math.PI}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default HomeBackdrop