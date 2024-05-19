import {OrbitControls, Text} from "@react-three/drei";

const Scene = () => {
    return (
        <>
            <OrbitControls />

            <Text
                fontSize={0.4}
                color="orange"
                font="./static/fonts/1.ttf"
                position-y={1.5}
                rotation-y={Math.PI * 0.1}
                maxWidth={2}
                textAlign="center"
            >
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