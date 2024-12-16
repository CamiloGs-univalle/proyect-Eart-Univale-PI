import React, { useState } from 'react'
import { useGLTF, Plane, Text } from '@react-three/drei'

export function Model1Rock3(props) {
    const { nodes, materials } = useGLTF('/model3D/a_rock.glb')

    const [clickedObject, setClickedObject] = useState(false);
    // Manejo de clics en los objetos
    const handleClick = (e) => {
        e.stopPropagation(); // Evita que el clic se propague
        setClickedObject(true); // Cambia el estado para mostrar el mensaje
    }

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene" scale={0.01}>
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="d7b534d9f3a24c43981743a4ebe7bfb3objcleanermaterialmergergles">

                        <mesh
                            name="Object_2"
                            geometry={nodes.Object_2.geometry}
                            material={materials.material_0}
                            onClick={handleClick}
                        />


                    </group>

                </group>
            </group>
            {clickedObject && (
                <group position={[-1, 10, -2]} scale={7} >
                    {/* Fondo blanco del cuadro */}
                    <Plane args={[2, 1]} position={[0, 1, 0]} rotation={[0, 0, 0]}>
                        <meshStandardMaterial background="rgba(255,255,255)" />
                    </Plane>
                    {/* Punta del cuadro (bocadillo) */}
                    <mesh
                        position={[0, 0, 0]} rotation={[0, 0, Math.PI / 1]}
                    >
                        <coneGeometry args={[0.2, 0.4, 16]} />
                        <meshStandardMaterial color="white" />

                    </mesh>
                    {/* Texto dentro del cuadro */}
                    <Text
                        position={[0, 1, 0.01]} // Ligeramente enfrente del plano
                        fontSize={0.1} // Tamaño del texto
                        color="black" // Color del texto
                        anchorX="center" // Anclaje horizontal
                        anchorY="middle" // Anclaje vertical
                        outlineWidth={0.001}
                        maxWidth={2}
                        textAlign='center'
                    >

                        Desgaste natural del suelo ⛈️
                    </Text>

                </group>
            )}
        </group>
    )
}

useGLTF.preload('/model3D/a_rock.glb')

export default Model1Rock3;
