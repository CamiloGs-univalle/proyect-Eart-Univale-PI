import { Text3D, Center } from "@react-three/drei"



const Textitle3d = () => {
    return(

        <>
            <Center top left position={[6, 7, 0]}>
                <Text3D
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
    )
};

export default Textitle3d;