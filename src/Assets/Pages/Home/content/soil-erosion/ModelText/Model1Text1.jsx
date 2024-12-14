import { Html } from "@react-three/drei"



export const Model1Text1 = (
    <>
        <Html
            occlude
            center
            distanceFactor={8}
            transform
            position={[0, 15, 0]}

            style={
                {
                    color: "#000",
                    fontSize: "90pt",
                    width: "60cm", // Establece el ancho deseado del contenedor
                    textAlign: "center" // Opcional: Alinea el texto en el centro
                }
            }
        >
            <h1>¿que es la Erosión del Suelo?</h1>
        </Html>


    </>
)

export const Model1Text2 = (
    <>
        <Html
            occlude
            center
            distanceFactor={8}
            transform
            position={[0, 15, 0]}

            style={
                {
                    color: "#000",
                    fontSize: "90pt",
                    width: "60cm", // Establece el ancho deseado del contenedor
                    textAlign: "center" // Opcional: Alinea el texto en el centro
                }
            }
        >
            <h1>Factores que Causan la Erosión</h1>
        </Html>


    </>
)


