import { Canvas } from "@react-three/fiber";
import "./ModeloCanvas2.css"
import { OrbitControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/cannon";
import { SkyEnvironment } from "../../contenido1/modelocanvas/ModelsCanvas";
import Model2Soil1 from "../../model/Model2Soil1";
import Model2Soil2 from "../../model/Model2Soil2";
import Model2Soil3 from "../../model/Model2Soil3";
import Model2Soil4 from "../../model/Model2Soil4";


export const model2canvauno = (
    <div className="model2-conteiner1">
        <Canvas
            shadows
            camera={{ position: [-50, 20, 60], fov: 17}}
        >
            <OrbitControls />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />

            <directionalLight position={[-10, 15, -10]} intensity={1} color="#d4f1f9" />
            <pointLight position={[5, 10, 5]} intensity={0.5} color="#fff59d" />

            {SkyEnvironment}

            <Physics gravity={[0, 1, 0]} allowSleep={true}>
                <Debug color="blue">
                    <Model2Soil1 position={[0, 0, 0]} />
                </Debug>
            </Physics>
        </Canvas>
    </div>
);


export const model2canvados = (
    <div className="model2-conteiner2">
        <Canvas
            shadows
            camera={{ position: [-50, 100, 70], fov: 90 }}
        >
            <OrbitControls />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />

            <directionalLight position={[-10, 15, -10]} intensity={1} color="#d4f1f9" />
            <pointLight position={[5, 10, 5]} intensity={0.5} color="#fff59d" />

            {SkyEnvironment}

            <Physics gravity={[0, 1, 0]} allowSleep={true}>
                <Debug color="blue">
                    <Model2Soil2 position={[0, -70, 0]} />
                </Debug>
            </Physics>
        </Canvas>
    </div>
);



export const model2canvatres = (
    <div className="model2-conteiner3">
        <Canvas
            shadows
            camera={{ position: [0, 5, 30], fov: 40 }}
        >
            <OrbitControls />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />

            <directionalLight position={[-10, 15, -10]} intensity={1} color="#d4f1f9" />
            <pointLight position={[5, 10, 5]} intensity={0.5} color="#fff59d" />

            {SkyEnvironment}

            <Physics gravity={[0, 1, 0]} allowSleep={true}>
                <Debug color="blue">
                    <Model2Soil3 position={[0, 0, 0]} />
                </Debug>
            </Physics>
        </Canvas>
    </div>
);



export const model2canvacuatro = (
    <div className="model2-conteiner4">
        <Canvas
            shadows
            camera={{ position: [0, 5, 7], fov: 90 }}
        >
            <OrbitControls />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />

            <directionalLight position={[-10, 15, -10]} intensity={1} color="#d4f1f9" />
            <pointLight position={[5, 10, 5]} intensity={0.5} color="#fff59d" />

            {SkyEnvironment}

            <Physics gravity={[0, 1, 0]} allowSleep={true}>
                <Debug color="blue">
                    <Model2Soil4 position={[0, 1, 0]} />
                </Debug>
            </Physics>
        </Canvas>
    </div>
);