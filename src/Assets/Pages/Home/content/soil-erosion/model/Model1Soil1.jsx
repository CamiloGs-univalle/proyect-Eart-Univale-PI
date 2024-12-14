import React, { useState } from 'react';
import { useGLTF, Text, Plane } from '@react-three/drei';

export function Model1Soil1(props) {
    const { nodes, materials } = useGLTF('/model3D/soilinicio.glb');
    const [clickedObject, setClickedObject] = useState(false);

    // Manejo de clics en los objetos
    const handleClick = (e, objectName) => {
        e.stopPropagation(); // Evita que el clic se propague
        setClickedObject(true); // Cambia el estado para mostrar el mensaje
    };

    // Generar las mallas de forma dinámica
    const meshes = [
        nodes.Object_2,
        nodes.Object_3,
        nodes.Object_4,
        nodes.Object_5,
    ].map((node, index) => (
        <mesh
            key={index}
            castShadow
            receiveShadow
            geometry={node.geometry}
            material={materials.main}
            onClick={(e) => handleClick(e, `Object_${index + 2}`)}
        />
    ));

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={40}>
                {meshes}
            </group>
            {/* Cuadro de diálogo estilo bocadillo */}
            {clickedObject && (
                <group position={[20, 15, 0]}>
                    {/* Fondo blanco del cuadro */}
                    <Plane args={[25,10]} position={[0, 5, 0]} rotation={[0, 0, 0]}>
                        <meshStandardMaterial background="rgba(255,255,255)" />
                    </Plane>
                    {/* Punta del cuadro (bocadillo) */}
                    <mesh position={[0, -2, 0]} rotation={[0, 0, Math.PI / 1]}>
                        <coneGeometry args={[2.2, 2.4, 16]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    {/* Texto dentro del cuadro */}
                    <Text
                        position={[0, 5, 0.01]} // Ligeramente enfrente del plano
                        fontSize={2.3} // Tamaño del texto
                        color="black" // Color del texto
                        anchorX="center" // Anclaje horizontal
                        anchorY="middle" // Anclaje vertical
                        outlineWidth={0.01}
                        maxWidth={20}
                        textAlign='center'
                    >
                        
                        Desgaste natural del suelo
                    </Text>
                </group>
            )}
        </group>
    );
}

useGLTF.preload('/model3D/soilinicio.glb');

export default Model1Soil1;
