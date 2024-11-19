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
import { Link } from "react-router-dom";
import FondoMap from "./FondoMap";

const Map = () => {
  // Funciones de redirección
  const redirectToSoil = () => {
    <Link to="/management" className="inicio">INICIAR PARTIDA</Link>
  };
  
  const redirectToManagement = () => {
    location.href = "/management"; // Cambia "/management" por la ruta deseada
  };

  const redirectToDeforestation = () => {
    window.location.href = "/deforestation"; // Cambia "/deforestation" por la ruta deseada
  };

  const redirectToBiodiversity = () => {
    window.location.href = "/biodiversity"; // Cambia "/biodiversity" por la ruta deseada
  };

  return (
    <>
      <Header />
      <div className="container-map3d">
        <div>
          <h1>MAPA</h1>
          <div className="contenedormap">
            <FondoMap className="container-map3d" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Map;