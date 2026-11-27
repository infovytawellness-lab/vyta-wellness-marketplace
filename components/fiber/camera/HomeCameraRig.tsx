"use client";

import { ReactNode, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "../../../lib/store/homeStore";



export const HomeCameraRig = ({children}: {children: ReactNode}) => {
    const group = useRef<THREE.Group>(null!);
    const snap = useSnapshot(state);
    useFrame((state, delta) => {
        easing.damp3(
          state.camera.position,
          [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
          0.25,
          delta,
        );
        easing.dampE(
          group.current.rotation,
          [state.pointer.y / 10, -state.pointer.x / 5, 0],
          0.25,
          delta,
        );
      });
    return <group ref={group}>{children}</group>;
}