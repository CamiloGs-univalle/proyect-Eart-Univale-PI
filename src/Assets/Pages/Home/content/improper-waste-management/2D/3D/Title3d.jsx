import { Text3D, Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import robotoFont from "../../fonts/Basic Sans Serif 7_Regular.json"; // Asegúrate de tener esta fuente o reemplázala con otra.

const Textitle3d = () => {
  const font = useLoader(FontLoader, robotoFont);

  return (
    <>
      <Center top left position={[6, 7, 0]}>
        <Text3D
          font={robotoFont} // Proporciona la fuente cargada aquí
          position={[1, 7.5, 0]}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          {`Tipos de residuos`}  
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
};

export default Textitle3d;
