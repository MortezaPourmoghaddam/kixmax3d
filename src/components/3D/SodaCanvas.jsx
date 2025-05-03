import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { DirectionalLight } from "three";
import { Model } from "./models/Model";
import Floating from "./Floating";
import HeroModel from "./HeroModel";
import GradientSphere from "./models/GradientSphere";

const SodaCanvas = () => {
  return (
    <Canvas
      style={{
        background: "transparent",
        // pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        overflow: "hidden",
      }}
      camera={{
        fov: 13,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <HeroModel />
      <directionalLight position={[0, 2, 5]} intensity={1.2} castShadow receiveShadow />
      <Environment files="/hdrs/lobby.hdr" background={false} environmentIntensity={.8} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default SodaCanvas;
