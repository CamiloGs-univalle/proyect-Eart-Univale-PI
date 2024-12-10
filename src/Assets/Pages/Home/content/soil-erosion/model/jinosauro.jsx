import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Jinosauro({ onUpdatePosition, onUpdateDirection }) {
    const group = useRef();
    const positionRef = useRef([0, -3.5, 0]);
    const directionRef = useRef([0, 0, -1]); // Dirección inicial (hacia adelante)
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
        const step = 0.5;
        let newPosition = [...positionRef.current];
        let newDirection = [...directionRef.current];

        activeKeys.current.forEach((key) => {
            const [x, y, z] = newPosition;

            switch (key) {
                case "s":
                    setRotation([0, Math.PI, 0]);
                    newDirection = [0, 0, 1];
                    newPosition = [x, y, z + step];
                    break;
                case "w":
                    setRotation([0, 0, 0]);
                    newDirection = [0, 0, -1];
                    newPosition = [x, y, z - step];
                    break;
                case "d":
                    setRotation([0, -Math.PI / 2, 0]);
                    newDirection = [1, 0, 0];
                    newPosition = [x + step, y, z];
                    break;
                case "a":
                    setRotation([0, Math.PI / 2, 0]);
                    newDirection = [-1, 0, 0];
                    newPosition = [x - step, y, z];
                    break;
                default:
                    break;
            }
        });

        if (JSON.stringify(newPosition) !== JSON.stringify(positionRef.current)) {
            positionRef.current = newPosition;
            directionRef.current = newDirection;
            setPosition(newPosition);
            setIsMoving(true);

            onUpdatePosition(newPosition); // Notifica nueva posición
            onUpdateDirection(newDirection); // Notifica nueva dirección
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

    return (
        <group ref={group} position={position} rotation={rotation}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 4.8]}>
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

useGLTF.preload("/model3D/Jinosauro.glb");
