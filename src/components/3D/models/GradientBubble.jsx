import { MeshTransmissionMaterial } from '@react-three/drei';

const GradientBubble = ({ scale }, ...props) => {
    return (
        <mesh position={[0, 0, 0]} {...props} scale={scale} castShadow receiveShadow>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
                color="white"
                transparent
                opacity={0.8}
                roughness={.1}
                metalness={.35}
            />
        </mesh>
    );
};

export default GradientBubble;
