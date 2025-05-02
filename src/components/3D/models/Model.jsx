import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
export function Model(props) {
  const { nodes, materials } = useGLTF("/model/Soda-can.gltf");
  const flavorTextures = {
    lemonLime: "/labels/lemon-lime.png",
    grape: "/labels/grape.png",
    blackCherry: "/labels/cherry.png",
    strawberryLemonade: "/labels/strawberry.png",
    watermelon: "/labels/watermelon.png",
    kix1: "/labels/kix1.png",
    kix2: "/labels/kix2.png",
    kix3: "/labels/kix3.png",
    kix4: "/labels/kix4.png",
  };
  const labels = useTexture(flavorTextures);
  labels.kix1.flipY = false;
  labels.kix2.flipY = false;
  labels.kix3.flipY = false;
  labels.kix4.flipY = false;
  const label = labels[props.texture];

  const metalMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.2,
    metalness: 1.5,
    color: 0xbbbbbb,
  });
  const bodyMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.27,
    metalness: 1.1,
    map: label,
    // color: "red"
  });

  return (
    <group
      scale={[0.7, 1, 0.7]}
      rotation={[0, -5.1, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cylinder.geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cylinder_1.geometry}
        material={bodyMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tab.geometry}
        material={metalMaterial}
      />
    </group>
  );
}

useGLTF.preload("/model/Soda-can.gltf");
