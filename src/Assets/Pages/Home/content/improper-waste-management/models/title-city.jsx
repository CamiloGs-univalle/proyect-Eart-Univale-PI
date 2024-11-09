import { Html } from "@react-three/drei"



const Citytext = () => {
    return (
        <>
            <Html
                occlude
                center
                style={
                    {
                        color:"purple"
                    }
                }
                distanceFactor={10}
                transform
                position={[0, 10, 0]}
                font="/fonts/basic_sans_serif_7.ttf"
                
            >
                <h1>Bienvenidos a una ciudad victima del mal manejo de reciduos</h1>
            </Html>


        </>
    )
};

export default Citytext;