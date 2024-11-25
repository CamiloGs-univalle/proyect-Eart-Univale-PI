import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'

export function Jinosauro(props) {
    const group = useRef();
    const positionRef = useRef([0, -3.50, 0]); // Ref para rastrear la posición actual
    const activeKeys = useRef(new Set()); // Almacenar teclas activas
    const { nodes, materials, animations } = useGLTF('/model3D/jinosauro.glb')

    const { actions } = useAnimations(animations, group)

    console.log(animations); // Muestra las animaciones disponibles
    // Estado para la posición y rotación del modelo
    const [position, setPosition] = useState(positionRef.current); // Inicializa con la posición del ref
    const [rotation, setRotation] = useState([0, 0, 0]); // Rotación inicial
    const [isMoving, setIsMoving] = useState(false);

    // Manejo de eventos de teclado
    const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();
        activeKeys.current.add(key); // Agrega la tecla al conjunto activo
        moveCharacter(); // Mueve el personaje
    };

    const handleKeyUp = (event) => {
        const key = event.key.toLowerCase();
        activeKeys.current.delete(key); // Elimina la tecla del conjunto activo
        if (activeKeys.current.size === 0) {
            setIsMoving(false); // Detiene la animación si no hay teclas activas
        }
    };

    const moveCharacter = () => {
        const step = 0.1; // Ajusta la distancia de movimiento (más lento)
        let newPosition = [...positionRef.current]; // Copia de la posición actual

        // Recorre todas las teclas activas
        activeKeys.current.forEach((key) => {
            const [x, y, z] = newPosition;

            switch (key) {
                case 'd': // Frente
                    setRotation([0, Math.PI, 0]);
                    newPosition = [  x + step, y, z ];
                    break;
                case 'a': // Atrás
                    setRotation([0, 0, 0]);
                    newPosition = [x - step, y, z];
                    break;
                case 'w': // Derecha
                    setRotation([0, -Math.PI / 2, 0]);
                    newPosition = [x, y, z - step];
                    break;
                case 's': // Izquierda
                    setRotation([0, Math.PI / 2, 0]);
                    newPosition = [ x, y, z + step];
                    break;
                default:
                    break;
            }
        });

        // Actualiza la posición solo si hay un cambio
        if (JSON.stringify(newPosition) !== JSON.stringify(positionRef.current)) {
            positionRef.current = newPosition; // Actualiza el ref de posición
            setPosition(newPosition); // Actualiza el estado
            setIsMoving(true); // Activa la animación de caminar
        }
    };

    // Activar o detener la animación de caminar
    useEffect(() => {
        if (isMoving) {
            actions['GltfAnimation 0']?.play();
        } else {
            actions['GltfAnimation 0']?.stop();
        }
    }, [isMoving, actions]);

    // Agregar y eliminar eventos de teclado
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
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
    )
}

export default Jinosauro;
// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/Jinosauro.glb");

// Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación