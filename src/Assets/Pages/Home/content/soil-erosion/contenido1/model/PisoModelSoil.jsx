import React from "react";
import { useGLTF } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

export function PisoModelSoil(props) {
  const { nodes, materials } = useGLTF("/model3D/ModelSoil3DPiso.glb");

  // Define un plano físico estático para representar el suelo
  const [ref] = usePlane(() => ({
    position: [0, -5, 0], // Ajusta la posición para coincidir con el modelo
    rotation: [-Math.PI / 2, 0, 0], // Orientación horizontal
  }));

  return (
    <group {...props} dispose={null}>
      {/* Asocia el plano físico al modelo 3D */}
      <mesh ref={ref}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 1, 0, 0]}>
            <group name="09fbx" rotation={[Math.PI / 2, 0, 0]} scale={1}>
              <group name="RootNode">
                <group name="Plane" rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                  <mesh
                    name="Plane__0"
                    geometry={nodes.Plane__0.geometry}
                    material={materials["Scene_-_Root"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload("/model3D/ModelSoil3DPiso.glb");

export default PisoModelSoil;
