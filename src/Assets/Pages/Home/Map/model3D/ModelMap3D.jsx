import { useGLTF } from '@react-three/drei'


const ModelMap3D = (props) => {
  // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
  const { nodes, materials } = useGLTF("/model3D/adventure_map.glb"); // Carga el modelo 3D desde el archivo GLB ubicado en "modelo3D/earth.glb"
  return (
    <group {...props} dispose={null} position={[0, 0, -5]}> {/* Ajusta el eje Z a un valor negativo para mover el modelo hacia atrás */}
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, 3.637, -3.653]} rotation={[-0.004, 0, 0]}>
          <group name="Map_01FBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="map001" rotation={[-Math.PI / 1.2, 0, 0]} scale={[1.038, 1.038, 1]}>
                <mesh
                  name="map001_01_-_Map_0"
                  geometry={nodes['map001_01_-_Map_0'].geometry}
                  material={materials['01_-_Map']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default ModelMap3D;

useGLTF.preload('/model3D/adventure_map.glb')