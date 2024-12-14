
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model2Soil2(props) {
    const { nodes, materials } = useGLTF('/model3D/perdida_ferti.glb')

    // Mapeo de meshes para simplificar la renderización
    const meshes = [
        { name: 'Object_4', geometry: nodes.Object_4.geometry, material: materials.TerrainNodeMaterial },
        { name: 'Object_5', geometry: nodes.Object_5.geometry, material: materials.TerrainNodeMaterial },
        { name: 'Object_6', geometry: nodes.Object_6.geometry, material: materials.TerrainNodeMaterial },
        { name: 'Object_7', geometry: nodes.Object_7.geometry, material: materials.TerrainNodeMaterial },
        { name: 'Object_8', geometry: nodes.Object_8.geometry, material: materials.TerrainNodeMaterial },
        { name: 'Object_10', geometry: nodes.Object_10.geometry, material: materials.AdornmentsMaterial },
    ]

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 1, 0, 0]} scale={0.1}>
                <group rotation={[Math.PI / 1, 0, 0]}>
                    {meshes.map((mesh, index) => (
                        <mesh
                            key={index}
                            name={mesh.name}
                            geometry={mesh.geometry}
                            material={mesh.material}
                        />
                    ))}
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/model3D/perdida_ferti.glb')

export default Model2Soil2;
