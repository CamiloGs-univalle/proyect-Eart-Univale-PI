import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

export function Person(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model3D/person.glb');
  const { actions } = useAnimations(animations, group);

  // Estado para la posición del modelo
  const [position, setPosition] = useState([0, 0.4, 0]);

  // Manejo de eventos de teclado para mover el modelo
  const handleKeyDown = (event) => {
    setPosition((prevPosition) => {
      const [x, y, z] = prevPosition;
      switch (event.key) {
        case 'w': // Adelante
          return [x, y, z - 0.1];
        case 's': // Atrás
          return [x, y, z + 0.1];
        case 'a': // Izquierda
          return [x - 0.1, y, z];
        case 'd': // Derecha
          return [x + 0.1, y, z];
        case ' ':
            [x, y + -0.1,y, z]; 
        default:
          return prevPosition;
      }
    });
  };

  // Activar la animación de caminar cuando el modelo se esté moviendo
  useEffect(() => {
    if (actions['walk']) {
      actions['walk'].play(); // Asegúrate de que la animación "walk" exista en el modelo
    }
    return () => {
      if (actions['walk']) {
        actions['walk'].stop();
      }
    };
  }, [position, actions]);

  // Escucha de eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <group ref={group} {...props} position={position} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3fc2ec394eb04896ac9a89a84ccf6643fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.Ch38_hair}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Ch38_hair}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <group name="Object_8" />
                  <group name="Object_11" />
                  <group name="Object_13" />
                  <group name="Object_15" />
                  <group name="Ch38_Shorts" />
                  <group name="Ch38_Shirt" />
                  <group name="Ch38_Socks" />
                  <group name="Ch38_Body" />
                  <group name="Ch38_Shoes" />
                  <group name="Ch38_Eyelashes" />
                  <group name="Ch38_Hair" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/model3D/person.glb');

// Componente principal de la escena
// const ScenaCausas = () => {
//   return (
//     <Canvas camera={{ position: [0, 2, 5], fov: 35 }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 10, 10]} intensity={1.5} />
//       <OrbitControls />
//       <Model />
//     </Canvas>
//   );
// };

export default Person;
