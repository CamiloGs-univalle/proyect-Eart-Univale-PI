import Header from "../../../../Header/Header";
import React from "react";
import { Agricultura, Agua, Desertificacion, Educacion, perdidafertilidad, soluciones } from "./contenido2";

import MusicaAmbient from "../../../../Music/Music_Soil/Pag2";
import { model2canvacuatro, model2canvados, model2canvatres, model2canvauno } from "./modelocanvas2/ModeloCanvas2";
import { Link } from "react-router-dom";


const Erosion2 = () => {
    return (
        <div>
            <Header />
            <MusicaAmbient/>
            <div className="section">
                {Agua}

            </div>

            <div className="section">
                {perdidafertilidad}
                {model2canvauno}
            </div>
            <div className="section">
                {Desertificacion}
                {model2canvados}
            </div>

            <div className="section">
                {soluciones}

            </div>
            <div className="section">
                {Agricultura}
                {model2canvatres}
            </div>
            <div className="section">
                {Educacion}
                {model2canvacuatro}
            </div>
            <div className="botonSoil">
                <li className="start-button">
                    <span className="start-icon">🏜️</span>
                    <Link to="/Quiz" className="start-button-title">Consecuencias</Link>
                </li>
            </div>

        </div>
    );
};

export default Erosion2;
