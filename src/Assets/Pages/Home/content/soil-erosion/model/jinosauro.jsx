import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Jinosauro(props) {
    const group = useRef();
    const cameraRef = useRef(); // Referencia para la cámara
    const positionRef = useRef([0, -5.5, 0]);
    const activeKeys = useRef(new Set());
    const { nodes, materials, animations } = useGLTF("/model3D/jinosauro.glb");

    const { actions } = useAnimations(animations, group);

    const [position, setPosition] = useState(positionRef.current);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [isMoving, setIsMoving] = useState(false);

    const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();
        activeKeys.current.add(key);
        moveCharacter();
    };

    const handleKeyUp = (event) => {
        const key = event.key.toLowerCase();
        activeKeys.current.delete(key);
        if (activeKeys.current.size === 0) {
            setIsMoving(false);
        }
    };

    const moveCharacter = () => {
        const step = 0.1;
        let newPosition = [...positionRef.current];

        activeKeys.current.forEach((key) => {
            const [x, y, z] = newPosition;

            switch (key) {
                case "s":
                    setRotation([0, Math.PI, 0]);
                    newPosition = [x + step, y, z];
                    break;
                case "w":
                    setRotation([0, 0, 0]);
                    newPosition = [x - step, y, z];
                    break;
                case "d":
                    setRotation([0, -Math.PI / 2, 0]);
                    newPosition = [x, y, z - step];
                    break;
                case "a":
                    setRotation([0, Math.PI / 2, 0]);
                    newPosition = [x, y, z + step];
                    break;
                default:
                    break;
            }
        });

        if (JSON.stringify(newPosition) !== JSON.stringify(positionRef.current)) {
            positionRef.current = newPosition;
            setPosition(newPosition);
            setIsMoving(true);
        }
    };

    useEffect(() => {
        if (isMoving) {
            actions["GltfAnimation 0"]?.play();
        } else {
            actions["GltfAnimation 0"]?.stop();
        }
    }, [isMoving, actions]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    // Usar `useFrame` para actualizar la posición de la cámara en cada frame
    useFrame(({ camera }) => {
        const [x, y, z] = position;
        // Ajusta la posición de la cámara con un ligero retraso
        camera.position.lerp({ x, y: y + 5, z: z + 10 }, 0.1);
        camera.lookAt(x, y, z); // Asegúrate de que la cámara siempre mire al dinosaurio
    });

    return (
        <group ref={group} {...props} dispose={null} position={position} rotation={rotation}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="_0">
                                <mesh
                                    name="mesh_0"
                                    geometry={nodes.mesh_0.geometry}
                                    material={materials.mesh_0}
                                    morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

export default Jinosauro;
useGLTF.preload("/model3D/Jinosauro.glb");
