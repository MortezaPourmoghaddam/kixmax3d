import React from 'react'
import Floating from './Floating'
import GradientSphere from './models/GradientSphere'
import { Float } from '@react-three/drei'
import Ellipse3d from './Ellipse3d'

const HeroModel = () => {
    return (
        <>
            <Ellipse3d />
            <group position={[0.55, -0.08, .2]}>
                <group position={[0, 0, -.17]} rotation={[-0.3, 0, 0.5]}>
                    <Floating texture={'kix4'} />
                </group>
                <group position={[0, 0, .17]} rotation={[0.3, 0, -0.5]}>
                    <Floating texture={'kix1'} />
                </group>
            </group>

        </>
    )
}

export default HeroModel