import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model2Soil4(props) {
  const { nodes, materials } = useGLTF('/model3D/aprende.glb');

  // Lista de configuraciones de mallas para iterar dinámicamente
  const meshes = [
    { name: 'Object_2', material: materials.Carriagelambert2SG },
    { name: 'Object_3', material: materials.Flaggonblinn1SG },
    { name: 'Object_4', material: materials.Hooseblinn1SG },
    { name: 'Object_5', material: materials.HooseinitialShadingGroup },
    { name: 'Object_6', material: materials.Hooselambert2SG },
    { name: 'Object_7', material: materials.Hooselambert3SG },
    { name: 'Object_8', material: materials.Hooselambert4SG },
    { name: 'Object_9', material: materials.Hooselambert5SG },
    { name: 'Object_10', material: materials.Hooselambert6SG },
    { name: 'Object_11', material: materials.Stalllambert1SG },
    { name: 'Object_12', material: materials.Wellblinn2SG },
    { name: 'Object_13', material: materials.WellinitialShadingGroup },
    { name: 'Object_14', material: materials.Welllambert2SG },
    { name: 'Object_15', material: materials.initialShadingGroup },
    { name: 'Object_16', material: materials.lambert13SG },
    { name: 'Object_17', material: materials.lambert14SG },
    { name: 'Object_18', material: materials.lambert2SG },
    { name: 'Object_19', material: materials.lambert5SG },
    { name: 'Object_20', material: materials.lambert5SG_lambert10SG },
    { name: 'Object_21', material: materials.lambert5SG_lambert10SG_lambert11SG },
    { name: 'Object_22', material: materials.lambert5SG_lambert10SG_lambert11SG_lambert12SG },
    { name: 'Object_23', material: materials.lambert6SG },
    { name: 'Object_24', material: materials.lambert8SG },
    { name: 'Object_25', material: materials.lambert9SG },
    { name: 'Object_26', material: materials.Bowllambert2SG },
    { name: 'Object_27', material: materials.Welllambert3SG },
    { name: 'Object_28', material: materials.Welllambert5SG },
    { name: 'Object_29', material: materials.blinn1SG },
    { name: 'Object_30', material: materials.lambert15SG },
    { name: 'Object_31', material: materials.lambert4SG },
    { name: 'Object_32', material: materials.lambert7SG },
  ];

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
          <group name="Finished_workobjcleanermaterialmergergles">
            {meshes.map(({ name, material }) => (
              <mesh
                key={name}
                name={name}
                geometry={nodes[name]?.geometry}
                material={material}
              />
            ))}
          </group>
        </group>
      </group>
    </group>
  );
}
export default Model2Soil4;
useGLTF.preload('/model3D/aprende.glb');