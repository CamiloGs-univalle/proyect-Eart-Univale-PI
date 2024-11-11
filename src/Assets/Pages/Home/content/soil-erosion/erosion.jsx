import Header from "../../../Header/Header";
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF, Sky } from "@react-three/drei";
import "./erosion.css";
import Soil3D from "./model/Soil3D";
import Text3D from "./model/text3D";

const Erosion = () => {
    return (
        <>
            <Header />
            <h1 className="titulo">Erosión del Suelo</h1>
            <div className="erosion-container">
                <div>
                    <h3 className="tituloSeccion">¿Cómo se produce la erosión del suelo?</h3>
                    <p className="subtituloSeccion">La erosión del suelo es un proceso natural,
                        pero en muchos casos acelerado por la actividad humana, que implica la
                        pérdida y desplazamiento de la capa superior del suelo, esencial para la
                        vida vegetal y la agricultura. Es un tema importante en el contexto ambiental,
                        ya que afecta la productividad agrícola, la calidad del agua y la biodiversidad.
                        A continuación te proporcionaré la información relevante y estructurada que
                        necesitas para desarrollar una página web sobre este tema.</p>
                </div>

                <div className="conteiner">
                    <div>
                        <Soil3D className="tierragrieta" />
                        
                    </div>
                    <div class="info-box">
                        <p>La erosión del suelo es un proceso natural, pero en muchos casos
                            acelerado por la actividad humana, que implica la pérdida y desplazamiento
                            de la capa superior del suelo, esencial para la vida vegetal y la agricultura.
                            Es un tema importante en el contexto ambiental, ya que afecta la productividad agrícola,
                            la calidad del agua y la biodiversidad. A continuación te proporcionaré la información
                            relevante y estructurada que necesitas para desarrollar una página web sobre este tema.</p>

                        <h3>1. Definición de erosión del suelo</h3>

                        <p>La erosión del suelo es el proceso por el cual las partículas de suelo son desplazadas
                            y removidas, principalmente por el viento, el agua y, en menor medida, por
                            actividades humanas como la agricultura y la construcción. A medida que la capa fértil
                            del suelo se reduce, disminuye la capacidad de la tierra para soportar cultivos, ecosistemas
                            y estructuras humanas.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Erosion;
