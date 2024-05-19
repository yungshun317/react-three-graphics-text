import {Center, Float, Html, OrbitControls, Text, Text3D} from "@react-three/drei";
import {useRef} from "react";

const Scene = () => {
    const cubeRef = useRef();

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

            <mesh position-x={1} ref={cubeRef}>
                <boxGeometry/>
                <meshBasicMaterial color="orange" />
                <Html
                    position={[-0.7, 0.5, 0.5]}
                    wrapperClass="text"
                    distanceFactor={5}
                    occlude={[cubeRef]}
                >
                    R3F
                </Html>
            </mesh>

            <mesh position-x={-1}>
                <boxGeometry/>
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    );
};

export default Scene;