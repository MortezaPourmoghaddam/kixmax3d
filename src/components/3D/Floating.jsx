import { Float } from '@react-three/drei'
import React from 'react'
import { Model } from './models/Model'

const Floating = ({ texture }) => {
    return (
        <Float
            speed={1.5}
            floatingRange={[-.02,.02]}
            floatIntensity={1.5}
            rotationIntensity={1.5}
        >
            <Model texture={texture} />
        </Float>
    )
}

export default Floating