"use client";

import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";
import { HomeCameraRig } from "../camera/HomeCameraRig";
import HomeBackdrop from "../backdrop/HomeBackdrop";


export const HomeCanvas = ({
  position = [0, 0, 2.5],
  fov = 25,
}:{
  position?: [number, number, number];
  fov?: number;
})=>(
  <Canvas 
    shadows
    camera={{position, fov}}
    gl={{preserveDrawingBuffer:true}}
    >
    <ambientLight intensity={0.5 * Math.PI} />
    <Environment files="/hdrs/potsdamer_platz_1k.hdr" />
    <HomeCameraRig>
      <HomeBackdrop />
      <Center>
      </Center>
    </HomeCameraRig>
  </Canvas>
)

