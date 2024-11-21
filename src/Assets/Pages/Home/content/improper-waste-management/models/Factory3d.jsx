import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Factory3d(props) {
  const { nodes, materials } = useGLTF('/model3D/factory.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Power_Plant_Mid"
          castShadow
          receiveShadow
          geometry={nodes.Power_Plant_Mid.geometry}
          material={materials['Material.005']}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'Power_Plant_Mid' }}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.006']}
          position={[-7.904, -0.151, -0.554]}
          rotation={[Math.PI, 0, 0]}
          userData={{ name: 'Cube' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/factory.glb')

export default Factory3d;