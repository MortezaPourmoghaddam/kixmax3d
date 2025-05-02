import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { DirectionalLight } from "three";
import { Model } from "./models/Model";

const SodaCanvas = () => {
  return (
    <Canvas
      style={{
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
      <Model texture={"kix1"}/>
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={.8} />
      {/* <OrbitControls /> */}
      {/* <directionalLight position={[1, 1, 2]} intensity={10} /> */}
    </Canvas>
  );
};

export default SodaCanvas;
