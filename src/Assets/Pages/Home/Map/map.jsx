import { OrbitControls } from "@react-three/drei";
import Header from "../../Header/Header";
import "./map.css";
import ModelMap3D from "./model3D/ModelMap3D";

import { Canvas } from "@react-three/fiber";

import { Link } from "react-router-dom";
import { Physics } from "@react-three/cannon";
import { Jinosauro } from "../content/soil-erosion/contenido1/model/jinosauro";

const Map = () => {
  // Funciones de redirección
  const redirectToSoil = () => {
    <Link to="/management" className="inicio">INICIAR PARTIDA</Link>
  };

  const redirectToManagement = () => {
    location.href = "/management"; // Cambia "/management" por la ruta deseada
  };

  const redirectToBiodiversity = () => {
    window.location.href = "/biodiversity"; // Cambia "/biodiversity" por la ruta deseada
  };

  return (
    <>
      <Header />
      <div className="container-map3d">
        <div className="contenedormap">
          <Canvas className="map-canvas"
            camera={{ position: [4, 100, 0], fov: 60 }}
          >
            <ambientLight />
            <directionalLight position={[0, 5, 0]} intensity={10} />

            <Physics gravity={[0, -9.8, 0]}>
              <Jinosauro />
              <ModelMap3D />

            </Physics>

            {/* Controles de cámara */}
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Map;