import { OrbitControls } from "@react-three/drei";
import Header from "../../Header/Header";
import "./map.css";
import ModelMap3D from "./model3D/ModelMap3D";
import ModelMapBiodiversity3D from "./model3D/ModelMapBiodiversity3D";
import ModelMapDeforestation3D from "./model3D/ModelMapDeforestation3D";
import ModelMapManagement3D from "./model3D/ModelMapManagement3D";
import ModelMapSoil3D from "./model3D/ModelMapSoil3D";
import Text3DSoil from "./model3D/Text3DSoil";
import { Canvas } from "@react-three/fiber";
import Text3DManagement from "./model3D/Text3DManagement";

const Map = () => {
  return (
    <>
      <Header />
      <div className="container-map3d">
        <div>
          <h1>MAPA</h1>
          <div className="contenedormap">
            <ModelMap3D className="container-map3d" />

            <Canvas className="map-canvas" camera={{ position: [0, 70, 90], fov: 70 }}>
              {/* Luz ambiental */}
              <ambientLight />
              <directionalLight position={[10, 10, 10]} intensity={3} />

              {/* Modelo del mapa (quieto) */}
              <ModelMap3D position={[0, 0, 0]} scale={[1, 1, 1]} />

              <group position={[-60, 40, -30]}>
                <ModelMapSoil3D position={[0, 10, -10]} scale={[5, 5, 5]} />
                <Text3DSoil />
              </group>
              {/* Modelo del suelo (giratorio) */}

              <group position={[0, 20, 20]}>
                <ModelMapManagement3D position={[0, 5, -10]} scale={[4, 4, 4]} />
                <Text3DManagement />
              </group>

              <group position={[20, 40, -30]}>
                <ModelMapDeforestation3D position={[0, 0, -10]} scale={[4, 4, 4]} />
              </group>

              <group position={[70, 10, 20]}>
                <ModelMapBiodiversity3D position={[0, 0, -10]} scale={[4, 4, 4]} />
              </group>







              {/* Controles de cámara */}
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
            </Canvas>
          </div>
        </div>

      </div>
    </>
  );
};

export default Map;
