import { Html, Text, Text3D, Center } from "@react-three/drei"


const Citytextito = () => {
    return (
        <>
            <Html
                occlude
                className="citytext"
                center
                color="purple"
                distanceFactor={10}
                transform
                position={[0, 10, 0]}
            >

                <h1>Bienvenidos a una ciudad victima del mal manejo de reciduos</h1>
            </Html>


        </>
    )
};

export default Citytextito;