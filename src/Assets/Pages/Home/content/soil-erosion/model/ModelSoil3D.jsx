import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelSoil3D(props) {
  const { nodes, materials } = useGLTF('/model3D/earthfragment.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="MeshBaker_mesh_mesh"
          castShadow
          receiveShadow
          geometry={nodes.MeshBaker_mesh_mesh.geometry}
          material={materials.waterlakemountain_mat}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          userData={{ name: 'MeshBaker_mesh_mesh' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/earthfragment.glb')

export default ModelSoil3D;