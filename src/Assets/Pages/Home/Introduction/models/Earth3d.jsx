
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF

import Tierra3d from "./Tierra3d";
// Definición del componente funcional RecyCling
const Earth3d = () => {
  return (
    <>
      {/* Contenedor para el modelo 3D con clase 'container-3d' */}
      <div className="container-3d-tierra">
        {/* Canvas que actúa como el área para renderizar el contenido 3D */}
        <Canvas
          camera={{
            position: [0, 0, 2], // Posición inicial de la cámara para que el modelo se vea completo
            fov: 70, // Campo de visión (Field of View) de la cámara, 70 grados
          }}>
          
          {/* Controles para poder rotar el modelo 3D automáticamente */}
          <OrbitControls
            autoRotate={true} // El modelo rotará automáticamente
          />
          
          {/* Luz ambiental que ilumina el modelo de manera uniforme */}
          <ambientLight />
          
          {/* Luz direccional que ilumina desde una posición específica con una intensidad alta */}
          <directionalLight position={[10, 10, 10]} intensity={5} />
          
          {/* Renderiza el modelo TrashCan, que contiene el modelo 3D */}
          <Tierra3d/>
        </Canvas>
      </div>
    </>
  );
};
export default Earth3d;