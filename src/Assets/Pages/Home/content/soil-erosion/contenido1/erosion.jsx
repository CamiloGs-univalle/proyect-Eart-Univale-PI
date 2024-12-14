import "./erosion.css"
import React from "react";
import { erosion, infoErosion, infoTiposErosion } from "./Contenido";
import { model1canvados, model1canvauno } from "./modelocanvas/ModelsCanvas";
import Header from "../../../../Header/Header";
import { Link } from "react-router-dom";
import MusicaAmbient from "../../../../Music/Music_Soil/Pag2";


const Erosion = () => {
    return (
        <div>
            <Header />
            <MusicaAmbient />
            <div className="primeraParte">
                {erosion}
            </div>
            <div className="segundaParte">
                {infoErosion}
                {model1canvauno}
            </div>
            <div className="terceraParte">
                {infoTiposErosion}
                {model1canvados}
            </div>
            <div className="botonSoil">
                <li className="start-button">
                    <span className="start-icon">🏜️</span>
                    <Link to="/erosion2" className="start-button-title">Consecuencias</Link>
                </li>
            </div>

        </div>
    );
};

export default Erosion;