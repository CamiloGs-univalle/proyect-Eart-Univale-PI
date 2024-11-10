
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import ModelMap3D from "./ModelMap3D";
import ModelMapSoil3D from "./ModelMapSoil3D";
import "../map.css"


// Definición del componente funcional RecyCling
const Map3D = () => {
  return (
    <>

      <div className="container-map3d">
        <Canvas className="map-canvas" camera={{ position: [0, 70, 90], fov: 70 }}>
          {/* Luz ambiental */}
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={3} />

          {/* Modelo del mapa (quieto) */}
          <ModelMap3D position={[0, 0, 0]} scale={[1, 1, 1]} />

          {/* Modelo del suelo (giratorio) */}
          <ModelMapSoil3D position={[-60, 40, -30]} scale={[7, 7, 7]} />

          {/* Controles de cámara */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>

    </>
  );
};
export default Map3D;