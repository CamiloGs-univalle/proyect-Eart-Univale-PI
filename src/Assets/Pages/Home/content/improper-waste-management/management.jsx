import Header from "../../../../components/Header/Header";
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import City, { City3d } from "../../modelos3D/models3d/City3d";
import "./management.css";

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
                    camera={{
                        position: [15, 11, 10], // Posición inicial de la cámara para que el modelo se vea completo
                        fov: 70, // Campo de visión (Field of View) de la cámara, 70 grados
                    }}>

                    {/* Controles para rotar y mover el modelo 3D */}
                    <OrbitControls />

                    {/* Luz ambiental para iluminar el modelo de manera uniforme */}
                    <ambientLight intensity={0.5} />

                    {/* Luz direccional con posición y sombras */}
                    <directionalLight 
                        position={[10, 10, 5]} // Posición de la luz
                        intensity={1}          // Intensidad de la luz
                        castShadow              // Activar sombras
                    />

                    {/* Renderiza el modelo de la ciudad */}
                    <City />
                </Canvas>
            </div>
        </>
    );
};

export default Management;
