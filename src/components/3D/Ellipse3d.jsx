import { Float } from '@react-three/drei'
import React from 'react'
import GradientSphere from './models/GradientSphere'
import GradientBubble from './models/GradientBubble'

const Ellipse3d = () => {
    return (
        <group position={[0, 0.1,0]} rotation={[0, 0, 0]}>
            <Float
                speed={2.5}
                floatingRange={[-0.04, 0.04]}
                rotationIntensity={0}
            >
                <group position={[0.25, -.1, 0.7]}>
                    <GradientBubble scale={0.035} />
                </group>
                <group position={[0.3, -.3, 1]}>
                    <GradientBubble scale={0.05} />
                </group>
                <group position={[0.6, -.3, 1]}>
                    <GradientBubble scale={0.02} />
                </group>
                <group position={[0.8, -.2, 0.3]}>
                    <GradientBubble scale={0.032} />
                </group>
                <group position={[0.6, 0.1 ,-0.2]}>
                    <GradientBubble scale={0.052} />
                </group>
            </Float>
        </group>
    )
}

export default Ellipse3d