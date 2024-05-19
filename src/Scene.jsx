import {OrbitControls, Text} from "@react-three/drei";

const Scene = () => {
    return (
        <>
            <OrbitControls/>

            <Text>
                This is a Text.
            </Text>

            <mesh position-x={-1}>
                <boxGeometry/>
                <meshBasicMaterial color="purple"/>
            </mesh>
        </>
    );
};

export default Scene;