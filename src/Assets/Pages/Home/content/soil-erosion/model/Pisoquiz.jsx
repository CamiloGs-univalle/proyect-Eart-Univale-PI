import React, { useRef, useState, useStates } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pisoquiz(props) {
  const { nodes, materials } = useGLTF('/model3D/pisoquiz.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-3.883, -7, 12.12]}
          rotation={[-1.202, -0.058, -0.143]}>
          <group name="sketchfabTempfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Object_3">
                <mesh
                  name="_Material_0"
                  geometry={nodes._Material_0.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="_Material_0_1"
                  geometry={nodes._Material_0_1.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="_Material_0_2"
                  geometry={nodes._Material_0_2.geometry}
                  material={materials.Material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/pisoquiz.glb')

export default Pisoquiz;