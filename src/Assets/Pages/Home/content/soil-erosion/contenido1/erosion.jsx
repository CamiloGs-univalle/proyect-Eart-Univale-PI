import "./erosion.css"
import React from "react";
import { erosion, infoErosion, infoTiposErosion } from "./Contenido";
import { modelcanvados, modelcanvauno } from "./modelocanvas/ModelsCanvas";
import Header from "../../../../Header/Header";


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