import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
export function Barrel(props) {
    const { nodes, materials } = useGLTF('/model3D/toxicbarrel.glb')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.drum}
              position={[59.034, 12457.005, -851.573]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.drum}
              position={[37.933, 9338.539, -702.987]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/model3D/toxicbarrel.glb')

  export default Barrel;