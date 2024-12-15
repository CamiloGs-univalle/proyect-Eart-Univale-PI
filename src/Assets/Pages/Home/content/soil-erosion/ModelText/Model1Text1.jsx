import { Center, Html, Text3D } from "@react-three/drei"



export const Model1Text1 = (
    <>
        <Center position={[-4, 15, 0]}>
    {/* Contenedor centrado en la posición especificada */}
    <Text3D
        font="/fonts/Basic Sans Serif 7_Regular.json" // Ruta a la fuente 3D
        bevelEnabled // Activa el bisel en los bordes
        bevelSize={0.02} // Tamaño del bisel
        height={0.5} // Profundidad del texto 3D
        lineHeight={0} // Ajusta la altura entre líneas
        size={3.9} // Tamaño del texto
        width={0.1} // Ancho máximo ajustable (en unidades del mundo)
    >
        <meshStandardMaterial color="black" /> {/* Color negro para el texto */}
        {`¿Qué es la Erosión del Suelo?`} {/* Texto a renderizar */}
    </Text3D>
</Center>


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


