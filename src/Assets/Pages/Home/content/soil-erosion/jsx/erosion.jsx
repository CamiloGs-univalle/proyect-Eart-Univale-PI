import Header from "../../../../Header/Header";
import "../css/erosion.css";
import Background from "./Background";

const Erosion = () => {
    return (
        <>
            <Header />
            <div>
                <Background />
            </div>

            <div className="erosion-container">
                <h3 className="tituloSeccion">¿Cómo se produce la erosión del suelo?</h3>
                <p>La erosión del suelo es un proceso natural, pero en muchos casos acelerado por la actividad humana, que implica la pérdida y desplazamiento de la capa superior del suelo, esencial para la vida vegetal y la agricultura. Es un tema importante en el contexto ambiental, ya que afecta la productividad agrícola, la calidad del agua y la biodiversidad. A continuación te proporcionaré la información relevante y estructurada que necesitas para desarrollar una página web sobre este tema.</p>
                <div className="home-erosion erosion-wrapper">
                    {/* Contenedor principal para la erosión */}
                    <div className="erosion-item">
                        {/* Sección sobre cómo se produce la erosión */}
                        <div className="seccion">
                            <p>Erosión hídrica:</p>El agua de lluvia o de los ríos puede arrastrar las partículas del suelo, especialmente si el terreno está inclinado o no está cubierto por vegetación.
                        </div>
                    </div>
                    <div className="erosion-item">
                        {/* Sección sobre cómo se produce la erosión */}
                        <div className="seccion">
                            <p>Erosión eólica:</p>El viento puede transportar las partículas del suelo, especialmente en áreas secas y áridas.
                        </div>
                    </div>
                    <div className="erosion-item">
                        {/* Sección sobre cómo se produce la erosión */}
                        <div className="seccion">
                            <p>Erosión por gravedad:</p>La fuerza de la gravedad puede hacer que las partículas del suelo se desprendan de las laderas y se desplacen hacia abajo.
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de conclusión */}
            <div className="home-erosion">
                <div className="erosion-container">
                    <div className="seccion">
                        <h3 className="tituloSeccion">¿Cómo se produce la erosión del suelo?</h3>
                        <ul>
                            <li className="elementoLista"><strong>Erosión hídrica:</strong> El agua de lluvia o de los ríos puede arrastrar las partículas del suelo, especialmente si el terreno está inclinado o no está cubierto por vegetación.</li>
                            <li className="elementoLista"><strong>Erosión eólica:</strong> El viento puede transportar las partículas del suelo, especialmente en áreas secas y áridas.</li>
                            <li className="elementoLista"><strong>Erosión por gravedad:</strong> La fuerza de la gravedad puede hacer que las partículas del suelo se desprendan de las laderas y se desplacen hacia abajo.</li>
                        </ul>
                    </div>
                    <div className="seccion">
                        <h3 className="tituloSeccion">Consecuencias de la erosión del suelo</h3>
                        <ul>
                            <li className="elementoLista"><strong>Pérdida de fertilidad del suelo:</strong> La capa superior del suelo es la más fértil, por lo que su pérdida reduce la capacidad del suelo para producir alimentos y otros productos agrícolas.</li>
                            <li className="elementoLista"><strong>Contaminación del agua:</strong> Las partículas del suelo erosionado pueden contaminar las aguas superficiales y subterráneas, lo que afecta la calidad del agua potable y la vida acuática.</li>
                            <li className="elementoLista"><strong>Desertificación:</strong> La erosión del suelo puede contribuir a la desertificación, un proceso que convierte las tierras fértiles en desiertos.</li>
                            <li className="elementoLista"><strong>Pérdida de biodiversidad:</strong> La erosión del suelo puede destruir los hábitats de las plantas y los animales, lo que lleva a la pérdida de biodiversidad.</li>
                        </ul>
                    </div>
                    <div className="seccion">
                        <h3 className="tituloSeccion">¿Cómo podemos prevenir la erosión del suelo?</h3>
                        <ul>
                            <li className="elementoLista"><strong>Prácticas agrícolas sostenibles:</strong> La rotación de cultivos, la agricultura de conservación y el uso de cultivos de cobertura ayudan a proteger el suelo de la erosión.</li>
                            <li className="elementoLista"><strong>Manejo de pastos:</strong> Evitar el pastoreo excesivo y la sobrecarga de los pastizales ayuda a mantener la cobertura vegetal y a proteger el suelo.</li>
                            <li className="elementoLista"><strong>Reforestación:</strong> Plantar árboles en áreas degradadas ayuda a proteger el suelo de la erosión y a mejorar la calidad del agua.</li>
                            <li className="elementoLista"><strong>Construcción de terrazas:</strong> Las terrazas ayudan a reducir la velocidad del agua de lluvia y a evitar la erosión.</li>
                            <li className="elementoLista"><strong>Manejo de cuencas hidrográficas:</strong> Controlar el flujo de agua en las cuencas hidrográficas ayuda a reducir la erosión y a mejorar la calidad del agua.</li>
                        </ul>
                    </div>
                </div>
                <div className="conclusion">
                    <p>La erosión del suelo es un problema grave que afecta a la salud de nuestro planeta. Es importante tomar medidas para prevenir la erosión del suelo y proteger nuestros recursos naturales.</p>
                </div>
            </div>

            {/* Efecto de burbujas de fondo */}
            <div className="background">
                <div className="bubbles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="bubble"></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Erosion;
