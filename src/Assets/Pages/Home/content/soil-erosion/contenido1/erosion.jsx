import "./erosion.css"
import React from "react";
import { erosion, infoErosion, infoTiposErosion } from "./Contenido";
import { modelcanvados, modelcanvauno } from "./modelocanvas/ModelsCanvas";
import Header from "../../../../Header/Header";
import { Link } from "react-router-dom";


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
            <Link to ="/erosion2" >erosss</Link>

        </div>
    );
};

export default Erosion;