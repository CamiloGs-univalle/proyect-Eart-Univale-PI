import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model1Rock2(props) {
    const { nodes, materials } = useGLTF('/model3D/roquita.glb')

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene" scale={8}>
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Collada_visual_scene_group">
                        <group name="moss" position={[-0.872, 2.035, 0.54]}>
                            <mesh
                                name="moss_rock_06-material"
                                geometry={nodes['moss_rock_06-material'].geometry}
                                material={materials.moss}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/model3D/roquita.glb')

export default Model1Rock2;
