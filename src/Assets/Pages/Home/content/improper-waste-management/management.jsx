import Header from "../../../Header/Header";
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import "./css/management.css";
import City3d from "./models/City3d";
import Citytextito from "./models/title-city";

const Management = () => {
    return (
        <>
            <Header />

            <div className="title-text">
                Manejo inadecuado de residuos
            </div>

            <div className="home-erosion">
                <h1 className="tituloPrincipal">El manejo de residuos se refiere a la recolección, transporte, procesamiento y disposición de los desechos generados por actividades humanas. Cuando no se maneja adecuadamente, puede generar graves problemas ambientales, como contaminación del suelo, agua y aire, contribuyendo al cambio climático y afectando la salud humana.</h1>
            </div>

            <div className="ciudadcita">
                <Canvas
                    shadows // Activa el renderizado de sombras en el Canvas
                    camera={{
                        position: [1, 15, 40], // Posición inicial de la cámara
                        fov: 30, // Campo de visión de la cámara
                    }}
                >
                    {/* Controles para rotar y mover el modelo 3D */}
                    <OrbitControls />

                    {/* Luz ambiental para iluminar el modelo de manera uniforme */}
                    <ambientLight intensity={0.4} />

                    {/* Luz direccional con sombras activadas */}
                    <directionalLight
                        position={[15, 20, 10]} // Ajuste de la posición para mejor iluminación
                        intensity={1.2}         // Aumenta la intensidad de la luz
                        castShadow              // Activa las sombras para esta luz
                        shadow-mapSize-width={1024} // Aumenta la resolución de las sombras
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}      // Ajuste de la distancia de renderizado de sombras
                        shadow-camera-left={-20}
                        shadow-camera-right={20}
                        shadow-camera-top={20}
                        shadow-camera-bottom={-20}
                    />

                    {/* Renderiza el modelo de la ciudad con sombras activadas */}
                    <City3d castShadow receiveShadow />
                    <Citytextito />

                </Canvas>

            </div>
        </>
    );
};

export default Management;
