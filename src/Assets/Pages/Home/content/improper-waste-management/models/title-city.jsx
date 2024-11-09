import { Html } from "@react-three/drei"
import "../css/title3d.css"


const Citytext = () => {
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
                font="/fonts/basic_sans_serif_7.ttf"
                
            >
                <h1>Bienvenidos a una ciudad victima del mal manejo de reciduos</h1>
            </Html>


        </>
    )
};

export default Citytext;