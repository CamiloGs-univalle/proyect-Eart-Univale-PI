import React, { useState } from "react";
import "../css/Types.css"; // Ruta del CSS
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Header from "../../../../Header/Header";
import Trashone from "../models/trashone3d";

const Types = () => {
    const [content, setContent] = useState("Selecciona el tipo de residuo del que requieras información");

    const handleModelClick = () => {
        setContent("El manejo inapropiado de residuos incluye diversos tipos, como los residuos sólidos urbanos (basura doméstica, restos de alimentos, papel, cartón, plásticos, vidrios y metales), residuos peligrosos (pilas, baterías, productos químicos, aceites usados, pesticidas y medicamentos), residuos electrónicos (aparatos obsoletos como computadoras, teléfonos y electrodomésticos), residuos orgánicos (restos de comida y desechos de jardinería), residuos industriales (subproductos químicos, metales pesados y desechos de fabricación) y residuos biomédicos (desechos hospitalarios como agujas, jeringas, gasas y medicamentos caducados). Su manejo inadecuado puede causar contaminación del agua, suelo y aire, propagación de enfermedades, emisión de gases de efecto invernadero y daños a la flora y fauna.");
    };

    return (
        <>
            <Header />
            <div className="page-container">
                <div className="title">Tipos de residuos</div>
                <div className="content-box">
                    <h2>{content}</h2>
                </div>
                <Canvas
                    shadows
                    camera={{
                        position: [5, 15, 50],
                        fov: 100,
                    }}
                    style={{
                        height: 400,
                        width: 350,
                        right: 780,
                        top: -270,
                        position: "relative",
                        borderRadius: 100,
                    }}
                >
                    <OrbitControls />
                    {/* Envolvemos Trashone con un grupo para manejar eventos */}
                    <mesh onClick={handleModelClick}>
                        <Trashone />
                    </mesh>
                </Canvas>
            </div>
        </>
    );
};

export default Types;

