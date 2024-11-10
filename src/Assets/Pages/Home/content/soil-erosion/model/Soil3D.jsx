import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import ModelSoil3D from "./ModelSoil3D";


// Definición del componente funcional RecyCling
const Soil3D = () => {
    return (
        <>
            {/* Contenedor para el modelo 3D con clase 'container-3d' */}
            <div className="tierragrieta">
                <Canvas
                    shadows // Activa las sombras en el lienzo
                    camera={{
                        position: [15, 20, 5], // Posición inicial de la cámara
                        fov: 40, // Campo de visión de la cámara
                    }}
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

                    {/* Renderiza el modelo */}
                    <ModelSoil3D />
                </Canvas>
            </div>
        </>
    );
};
export default Soil3D;