import React, { useRef, useState, useStates } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Roca(props) {
    const { nodes, materials } = useGLTF('/model3D/roca.glb')
    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" position={[0.078, 10.115, 8.959]} rotation={[0, 0, -0.008]}>
                    <group name="Roca5objcleanergles" position={[-0.483, -11.196, -1.562]}>
                        <mesh
                            name="Object_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_2.geometry}
                            material={materials.material_0}
                        />
                        <mesh
                            name="Object_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_3.geometry}
                            material={materials.material_0}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/model3D/roca.glb')

export default Roca;