import Header from "../../Header/Header";
import "./map.css";
import Map3D from "./model3D/map3D";
import Soil3d from "./model3D/soil3d";



const Map = () => {
  return (
    <>
      <Header />

      <div className="App">
        <h1>MAPA</h1>
        <div className="contenedormap">
          <Map3D className="container-map3d" />
        </div>
      </div>
    </>
  );
};

export default Map;
