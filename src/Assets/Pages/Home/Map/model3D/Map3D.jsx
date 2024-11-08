
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, TransformControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import ModelMap3D from "./ModelMap3D";
import Modelsoil3D from "./Modelsoil3D";


// Definición del componente funcional RecyCling
const Map3D = () => {
  return (
    <>
      <div className="container-map3d">
      <Canvas
        camera={{ position: [0, 0, 90], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
      >
        <OrbitControls autoRotate={false} enableZoom={false} enableRotate={false} enablePan={false} />
        <ambientLight />
        <directionalLight position={[10, 10, 10]} intensity={5} />

        {/* Renderiza el modelo de mapa */}
        <ModelMap3D position={[0, 0, 0]} />

        {/* Renderiza el modelo de Soil ya agrandado */}
        <Modelsoil3D position={[10, 5, 50]} />
      </Canvas>

      <Canvas
        camera={{ position: [0, 0, 90], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
      >
        <OrbitControls autoRotate={true} enableZoom={true} enableRotate={true} enablePan={true} />
        <ambientLight />
        <directionalLight position={[10, 10, 10]} intensity={5} />

        {/* Renderiza el modelo de mapa */}
        <ModelMap3D position={[0, 0, 0]} />

        {/* Renderiza el modelo de Soil ya agrandado */}
        <Modelsoil3D position={[10, 5, 50]} />
      </Canvas>
    </div>
    </>
  );
};
export default Map3D;