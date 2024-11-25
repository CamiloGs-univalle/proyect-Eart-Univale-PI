import React, { useRef, useState, useStates } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function ModelSoil3DPiso(props) {
  const { nodes, materials } = useGLTF('/model3D/ModelSoil3DPiso.glb')
  const [clickedObject, setClickedObject] = useState(null) // Para guardar el objeto clickeado

  // Función para manejar los clics
  const handleClick = (e, objectName) => {
    e.stopPropagation() // Evita que el clic afecte otros elementos
    const position = e.object.position // Obtiene la posición del objeto clickeado
    setClickedObject({ name: objectName, position }) // Actualiza el estado con la información del objeto
  }
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="09fbx" rotation={[Math.PI / 2, 0, 0]} scale={1}>
            <group name="RootNode">
              <group name="Plane" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Plane__0"
                  geometry={nodes.Plane__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/ModelSoil3DPiso.glb')

export default ModelSoil3DPiso;