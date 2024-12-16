import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model2Anima1(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/model3D/gatbana.glb');
    const { actions } = useAnimations(animations, group);

    // Estados para el comportamiento de caminar y detenerse
    const [isMoving, setIsMoving] = useState(false);
    const [angle, setAngle] = useState(0); // Ángulo actual en el círculo
    const [radius] = useState(10); // Radio del círculo (puedes modificarlo para cambiar el tamaño)

    // Incremento del ángulo por frame
    const angleIncrement = 0.02; // Ajusta este valor para cambiar la velocidad de giro

    useEffect(() => {
        const interval = setInterval(() => {
            setIsMoving((prev) => !prev); // Alterna entre caminar y detenerse
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    // Actualizar posición y rotación en círculo si está en movimiento
    useEffect(() => {
        let animationFrame;

        const move = () => {
            if (isMoving) {
                setAngle((prevAngle) => prevAngle + angleIncrement); // Incrementa el ángulo
            }
            animationFrame = requestAnimationFrame(move);
        };

        move();

        return () => cancelAnimationFrame(animationFrame);
    }, [isMoving, angleIncrement]);

    // Calcular posición y rotación en el círculo basado en el ángulo
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const rotationY = Math.PI / 2 - angle; // Ajustar la rotación para que mire hacia la dirección del movimiento

    // Reproducir o detener la animación según el estado de movimiento
    useEffect(() => {
        if (isMoving) {
            actions['metarigAction.001']?.play();
        } else {
            actions['metarigAction.001']?.stop();
        }
    }, [isMoving, actions]);

    return (
        <group
            ref={group}
            {...props}
            position={[x, 2, z]} // Actualizar la posición en el círculo
            rotation={[0, rotationY, 0]} // Rotación para mirar hacia el movimiento
            dispose={null}
        >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, -1.2, 0]}>
                            <group name="metarig_26" position={[0.228, 3.384, 0]}>
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials['Material.002']}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials['Material.006']}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_10"
                                        geometry={nodes.Object_10.geometry}
                                        material={materials['Material.003']}
                                        skeleton={nodes.Object_10.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_11"
                                        geometry={nodes.Object_11.geometry}
                                        material={materials['Material.006']}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_13"
                                        geometry={nodes.Object_13.geometry}
                                        material={materials['Material.005']}
                                        skeleton={nodes.Object_13.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_14"
                                        geometry={nodes.Object_14.geometry}
                                        material={materials['Material.006']}
                                        skeleton={nodes.Object_14.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_16"
                                        geometry={nodes.Object_16.geometry}
                                        material={materials['Material.004']}
                                        skeleton={nodes.Object_16.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_17"
                                        geometry={nodes.Object_17.geometry}
                                        material={materials['Material.006']}
                                        skeleton={nodes.Object_17.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_19"
                                        geometry={nodes.Object_19.geometry}
                                        material={materials['Material.001']}
                                        skeleton={nodes.Object_19.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_20"
                                        geometry={nodes.Object_20.geometry}
                                        material={materials['Material.007']}
                                        skeleton={nodes.Object_20.skeleton}
                                    />
                                    <group name="Cube_20" />
                                    <group name="Cube001_21" />
                                    <group name="Cube002_22" />
                                    <group name="Cube003_23" />
                                    <group name="Sphere_25" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/model3D/gatbana.glb');

export default Model2Anima1;
