import Header from "../../../../Header/Header";
import React from "react";
import { Agricultura, Agua, Desertificacion, Educacion, perdidafertilidad, soluciones } from "./contenido2";
import "./erosion2.css"


const Erosion2 = () => {
    return (
        <div>
            <Header />
            <div className="section">
                {Agua}
            </div>
            <div className="section">
                {perdidafertilidad}
            </div>
            <div className="section">
                {Desertificacion}
            </div>
            <div className="section">
                {soluciones}
            </div>
            <div className="section">
                {Agricultura}
            </div>
            <div className="section">
                {Educacion}
            </div>
            
        </div>
    );
};

export default Erosion2;
