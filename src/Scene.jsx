import {Center, Float, OrbitControls, Text, Text3D} from "@react-three/drei";

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

            <Center>
                <Float speed={5} floatIntensity={4}>
                    <Text3D
                        font="./static/fonts/2.json"
                        height={1}
                        size={1.1}
                        letterSpacing={-0.1}
                        bevelEnabled
                        bevelSegments={20}
                    >
                        Hello
                        <meshNormalMaterial />
                    </Text3D>
                </Float>
            </Center>

            <mesh position-x={-1}>
                <boxGeometry />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    );
};

export default Scene;