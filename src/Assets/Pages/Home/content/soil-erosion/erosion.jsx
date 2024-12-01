import "./erosion.css"
import React from "react";
import Header from "../../../Header/Header";
import { erosion, infoErosion, infoTiposErosion } from "./contenido/Contenido";
import { modelcanvados, modelcanvauno } from "./modelocanvas/modelcanvas";

const Erosion = () => {
    return (
        <div>
            <Header />
            <div className="primeraParte">
                {erosion}
            </div>
            <div className="segundaParte">
                {infoErosion}
                {modelcanvauno}
            </div>
            <div className="terceraParte"> 
                {infoTiposErosion}
                {modelcanvados}
            </div>
        </div>
    );
};

export default Erosion;