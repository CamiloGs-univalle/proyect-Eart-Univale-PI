import { Html } from "@react-three/drei"



const Model12d = () => {
    return (
        <>
            <Html
                occlude
                className="welcome-text"
                center
                distanceFactor={10}
                transform
                position={[1, 5, 0]}
            >
                <h1>Tipos de residuos</h1>
            </Html>
        </>
    )
};

export default Model12d;