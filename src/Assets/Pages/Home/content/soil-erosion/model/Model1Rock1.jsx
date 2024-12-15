import React, { useState } from 'react'
import { useGLTF, Plane, Text } from '@react-three/drei'
import { useSphere } from '@react-three/cannon';

export function Model1Rock1(props) {
    const { nodes, materials } = useGLTF('/model3D/rock.glb')
    const [clickedObject, setClickedObject] = useState(false);
    // Manejo de clics en los objetos
    const handleClick = (e) => {
        e.stopPropagation(); // Evita que el clic se propague
        setClickedObject(true); // Cambia el estado para mostrar el mensaje

    };
    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene" scale={0.1} >
                <group name="Sketchfab_model" rotation={[-Math.PI / 1, 0, 0]}>
                    <group name="RockObjcleanergles" position={[-28.555, -47.997, -15.852]}>
                        <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.Default}  
                            
                            onClick={handleClick} />

                    </group>
                </group>
                {clickedObject && (
                    <group position={[20, 100, 0]} >
                        {/* Fondo blanco del cuadro */}
                        <Plane args={[250, 100]} position={[0, 50, 0]} rotation={[0, 0, 0]}>
                            <meshStandardMaterial background="rgba(255,255,255)" />
                        </Plane>
                        {/* Punta del cuadro (bocadillo) */}
                        <mesh 
                        
                        
                        position={[0, -20, 0]} rotation={[0, 0, Math.PI / 1]}
                            
                        >
                            <coneGeometry args={[20.2, 20.4, 16]} />
                            <meshStandardMaterial color="white" />




                        </mesh>
                        {/* Texto dentro del cuadro */}
                        <Text
                            position={[0, 50, 0.01]} // Ligeramente enfrente del plano
                            fontSize={20.3} // Tamaño del texto
                            color="black" // Color del texto
                            anchorX="center" // Anclaje horizontal
                            anchorY="middle" // Anclaje vertical
                            outlineWidth={0.01}
                            maxWidth={250}
                            textAlign='center'
                        >

                            Desgaste natural del suelo ⛈️
                        </Text>

                    </group>
                )}
            </group>
        </group>
    )
}

useGLTF.preload('/model3D/rock.glb')

export default Model1Rock1;
