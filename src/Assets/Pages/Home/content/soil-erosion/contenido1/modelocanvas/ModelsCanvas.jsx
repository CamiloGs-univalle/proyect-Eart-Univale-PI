import "./ModelsCanvas.css"
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Text3D from "../model/Text3D.jsx";
import ModelSoil3D from "../model/ModelSoil3D.jsx";
import Personsoil from "../model/Personsoil.jsx";
import PisoModelSoil from "../model/PisoModelSoil.jsx";
import { useRef, useState } from "react";
import { Jinosauro } from "../model/jinosauro.jsx";



function FollowDinosaur() {
    const [dinoPosition, setDinoPosition] = useState([0, -5, 0]); // Posición del dinosaurio
    const [dinoDirection, setDinoDirection] = useState([0, 0, -1]); // Dirección del dinosaurio
    const [isUserInteracting, setIsUserInteracting] = useState(false); // Indica si el usuario interactúa manualmente
    const lastInteractionTime = useRef(Date.now()); // Tiempo de la última interacción

    const cameraRef = useRef(); // Referencia a la cámara

    // Lógica para seguir al dinosaurio
    useFrame(({ camera }) => {
        const now = Date.now();
        const [x, y, z] = dinoPosition;
        const [dx, dy, dz] = dinoDirection; // Dirección actual del dinosaurio

        // Si no hay interacción reciente del usuario
        if (!isUserInteracting && now - lastInteractionTime.current > 1000) {
            // Nueva posición de la cámara alrededor del dinosaurio según la dirección
            const cameraOffset = [
                x - dx * 50, // Posición relativa según dirección
                y + 10, // Elevar un poco la cámara
                z - dz * 50,
            ];

            // Movimiento suave de la cámara
            camera.position.lerp({ x: cameraOffset[0], y: cameraOffset[1], z: cameraOffset[2] }, 0.04);
            camera.lookAt(x, y, z); // Mirar al dinosaurio
        }
    });

    // Inicia la interacción manual
    const handleStartInteraction = () => {
        setIsUserInteracting(true);
    };

    // Finaliza la interacción manual
    const handleEndInteraction = () => {
        setIsUserInteracting(false);
        lastInteractionTime.current = Date.now(); // Actualiza el tiempo de la última interacción
    };

    return (
        <>
            {/* Controles manuales */}
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                onStart={handleStartInteraction}
                onEnd={handleEndInteraction}
            />
            {/* Dinosaurio y actualización de dirección */}
            <Jinosauro
                onUpdatePosition={(pos) => setDinoPosition(pos)}
                onUpdateDirection={(dir) => setDinoDirection(dir)}
            />
        </>
    );
}

export default FollowDinosaur;

export const modelcanvauno = (
    <>
        <div className="tierragrieta1">
            <Canvas
                shadows // Activa las sombras en el lienzo
            >
                {/* Controles para rotar y mover el modelo 3D */}
                <OrbitControls />

                {/* Luz ambiental para iluminar el modelo de manera uniforme */}
                <ambientLight intensity={0.3} color="#ffffff" />

                {/* Luz direccional principal (luz del sol) */}
                <directionalLight
                    position={[10, 15, 10]} // Posición de la luz
                    intensity={1.2} // Intensidad de la luz
                    color="#ffddaa" // Color cálido para simular la luz del sol 
                    castShadow // Activar sombras
                    shadow-mapSize-width={1024} // Tamaño de la sombra para mayor detalle
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.0001} // Reduce los problemas de sombra en objetos delgados
                />

                {/* Segunda luz direccional para rellenar desde otro ángulo */}
                <directionalLight
                    position={[-10, -10, -10]} // Luz desde el lado opuesto
                    intensity={0.5} // Menor intensidad para el relleno
                    color="#88c0d0" // Color frío para equilibrar la iluminación
                    castShadow
                />

                {/* Luz puntual para iluminar detalles específicos */}
                <pointLight
                    position={[5, 10, 5]} // Posición de la luz
                    intensity={0.7} // Intensidad
                    color="#ffd700" // Luz amarilla dorada
                    distance={20} // Distancia de alcance de la luz
                    castShadow
                />

                {/* Luz focal para un efecto más direccional y concentrado */}
                <spotLight
                    position={[0, 20, 10]} // Posición de la luz
                    angle={0.3} // Ángulo de apertura del foco
                    penumbra={0.5} // Suavizado de los bordes del foco
                    intensity={0.8} // Intensidad
                    color="#ffffff"
                    castShadow
                />
                <Sky
                    sunPosition={[0, -1, -1]} // Coloca el sol debajo del horizonte
                    inclination={0.2} // Ajusta la inclinación para simular el atardecer
                    azimuth={180} // Ajusta el ángulo de azimut para cambiar la dirección de la luz
                    mieCoefficient={0.005} // Ajusta la dispersión atmosférica
                    elevation={85} // Ajusta la elevación del sol
                    mieDirectionalG={0.07} // Ajusta el brillo del sol
                    rayleigh={3} // Ajusta la dispersión de Rayleigh
                    turbidity={15} // Ajusta la claridad del cielo
                    exposure={0.8} // Ajusta la exposición del cielo
                    distance={50}
                />

                {/* Renderiza el modelo */}
                <ModelSoil3D position={[0, -5, 0]} />
                <Text3D />
                <Personsoil />
            </Canvas>
        </div>
    </>
);

export const modelcanvados = (
    <>
        <div className="tierragrieta2">
            <Canvas
                shadows
                camera={{
                    position: [0, 10, 50],
                    fov: 20,
                }}
            >
                {/* Configuración de OrbitControls */}
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                />

                {/* Configuración de luces */}
                <ambientLight intensity={0.3} color="#ffffff" />
                <directionalLight
                    position={[10, 15, 10]}
                    intensity={1.2}
                    color="#ffddaa"
                    castShadow
                />
                <Sky sunPosition={[0, -1, -1]} turbidity={15} />

                {/* Seguimiento del dinosaurio */}
                <FollowDinosaur />

                {/* Renderiza el piso */}
                <PisoModelSoil position={[0, -5, 0]} />
            </Canvas>
        </div>
    </>
);

