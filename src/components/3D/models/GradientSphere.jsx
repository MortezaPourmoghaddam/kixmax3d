// GradientSphere.jsx
import * as THREE from 'three';
import React, { useMemo } from 'react';

const GradientSphere = ({position , scale , color1, color2 , color3}) => {
    const texture = useMemo(() => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, color1 );
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color3);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }, []);

    return (
        <mesh position={position} scale={scale} castShadow receiveShadow>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default GradientSphere;
