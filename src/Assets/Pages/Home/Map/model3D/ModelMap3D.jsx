import { Suspense, useMemo } from "react"; // Importamos Suspense y useMemo
import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF

// Componente que carga y muestra el modelo 3D del mapa
const ModelMap3D = (props) => {
  // Desestructuración del objeto retornado por useGLTF
  const { nodes, materials } = useGLTF("/model3D/map.glb");

  // Memoriza las transformaciones para evitar recalcularlas en cada render
  const transformMap = useMemo(() => ({
    position: [0, -20, 0], // Centrado horizontalmente y verticalmente
    rotation: [Math.PI / 2.09, 4.6, 4.68], // Ajusta para que el mapa esté vertical
    scale: [1.5, 1.5, 1.3], // Escala adecuada
  }), []);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" {...transformMap}>
          <group name="Map_01FBX">
            <group name="RootNode">
              <group name="map001">
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
  );
};

// Componente envuelto en Suspense para gestionar la carga del modelo 3D
export default ModelMap3D;

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/map.glb");
