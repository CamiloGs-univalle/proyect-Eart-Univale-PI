import { Html } from "@react-three/drei"



const Model22d = () => {
    return (
        <>
            <Html
                occlude
                className="welcome-text"
                center
                distanceFactor={90}
                transform
                position={[1, 50, 0]}
            >
                <h1>Residuos industriales</h1>
            </Html>
        </>
    )
};

export default Model22d;