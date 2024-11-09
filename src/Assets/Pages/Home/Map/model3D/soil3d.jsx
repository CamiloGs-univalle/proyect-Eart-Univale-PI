
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import Modelsoil3D from "./Modelsoil3D";



// Definición del componente funcional RecyCling
const Soil3d = () => {
  return (
    <>
      <div className="container-map3d">
        <Canvas
          camera={{ position: [0, 40, 0], fov: 60 }}
          style={{ width: "100%", height: "100%" }}
        >
          <OrbitControls
            autoRotate={true}
            enableZoom={true}        // Permite hacer zoom
            enableRotate={true}      // Permite rotar
            enablePan={true}        // Evita el paneo lateral
            />
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <Modelsoil3D/>
        </Canvas>
      </div>
    </>
  );
};
export default Soil3d;