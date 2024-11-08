
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import ModelMap3D from "./ModelMap3D";


// Definición del componente funcional RecyCling
const Map3D = () => {
  return (
    <>
      <div className="container-map3d">
        <Canvas
          camera={{ position: [0, 0, 90], fov: 60 }}
          style={{ width: "100%", height: "100%" }}
        >
          <OrbitControls
            autoRotate={false}
            enableZoom={false}        // Permite hacer zoom
            enableRotate={false}      // Permite rotar
            enablePan={false}        // Evita el paneo lateral
            />
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <ModelMap3D />
        </Canvas>
      </div>
    </>
  );
};
export default Map3D;