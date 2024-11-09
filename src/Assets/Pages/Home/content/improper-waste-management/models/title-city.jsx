import { Html } from "@react-three/drei"



const Citytext = () => {
    return (
        <>
            <Html
                occlude
                center



                distanceFactor={10}
                transform
                position={[0, 10, 0]}
                
                style={
                    {
                        color: "#8C695D",
                        fontSize: "10pt"
                    }
                }
            >
                <h1>Bienvenidos a una ciudad victima del mal manejo de reciduos</h1>
            </Html>


        </>
    )
};

export default Citytext;