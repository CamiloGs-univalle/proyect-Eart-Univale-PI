import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model2Soil1(props) {
    const { nodes, materials } = useGLTF('/model3D/fertily.glb')

    return (
        <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, 0.671, -5.899]} rotation={[-0.168, 0, 0]}>
          <group name="modelobjcleanermaterialmergergles">
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.model} />
          </group>
        </group>
      </group>
    </group>
    )
}

useGLTF.preload('/model3D/fertily.glb')

export default Model2Soil1;
