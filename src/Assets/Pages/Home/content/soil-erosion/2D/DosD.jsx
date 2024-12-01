import { Html } from "@react-three/drei"



const DosD = () => {
    return (
        <>
            <Html
                occlude
                className="welcome-text"
                center
                distanceFactor={12}
                transform
                position={[0,2, 0]}
            >
                <h1>Erosion del suelo</h1>
            </Html>
        </>
    )
};

export default DosD;