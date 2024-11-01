import Header from "../../../components/Header/Header";
import "./Home.css";
import Earth3d from "./modelo3d/Earth3d";

const Home = () => {
  return (
    <>
      <Header />
      <h1>Bienvenidos a Land World</h1>
      <div className="containerhome">
        <Earth3d className="container-3d-tierra" />
        <div className="container-home">
          <div className="text-container">
            <p>
              La Tierra, nuestro hogar compartido, está enfrentando múltiples desafíos ambientales
              que afectan la vida tal como la conocemos. Entre estos, la deforestación, la erosión
              del suelo y la pérdida de biodiversidad son tres de las mayores amenazas que ponen en
              peligro la estabilidad de nuestros ecosistemas. Estas problemáticas, impulsadas en gran
              medida por las actividades humanas, no solo degradan el medio ambiente, sino que también
              comprometen la capacidad de futuras generaciones para disfrutar de un planeta saludable.
              Además, el manejo inadecuado de residuos se ha convertido en un problema global que agrava
              la situación. Los residuos mal gestionados contaminan ríos, mares y tierras, y contribuyen
              a la destrucción de hábitats naturales y al deterioro de la calidad de vida de muchas comunidades.
              En esta página, exploraremos cómo estos factores están interconectados, analizaremos sus causas,
              consecuencias y, lo más importante, ofreceremos soluciones prácticas que podemos adoptar para mitigar
              su impacto. Nuestro planeta aún tiene la capacidad de regenerarse, pero depende de nosotros tomar acción inmediata para protegerlo.
            </p>
            <button className="btn">
              <div className="wrapper">
                <a href="/map" className="inicio">INICIAR PARTIDA</a>
                {[...Array(6)].map((_, i) => (
                  <div className={`flower flower${i + 1}`} key={i}>
                    {[...Array(4)].map((_, j) => (
                      <div className={`petal ${["one", "two", "three", "four"][j]}`} key={j} />
                    ))}
                  </div>
                ))}
              </div>
            </button>
          </div>
        </div>

      </div>

    </>
  );
};

export default Home;
