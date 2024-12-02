import "./erosion.css"
import React from "react";
import Header from "../../../Header/Header";
import { erosion, infoErosion, infoTiposErosion } from "./contenido/Contenido";
import { modelcanvados, modelcanvauno } from "./modelocanvas/modelcanvas";
import Pisoquiz from "./model/pisoquiz";
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
            <div>
                <Link to="/Quizsoil"> Mi perfil </Link>
            </div>
           
        </div>
    );
};

export default Erosion;