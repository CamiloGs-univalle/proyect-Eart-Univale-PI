import Header from "../../Header/Header";
import "./map.css";
import Map3D from "./model3D/Map3D";

const Map = () => {
  return (
    <>
      <Header />
      <div>
        <h1>MAPA</h1>
        <div className="contenedormap">
          <Map3D className="container-map3d" />
        </div>
      </div>
    </>
  );
};

export default Map;
