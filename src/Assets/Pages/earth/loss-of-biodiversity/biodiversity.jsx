import Header from "../../../../components/Header/Header";
import "./biodiversity.css";
//import Earth3d from "./modelo3D/earth_holograma";
const Biodiversity = () => {
  return (
    <>
      <Header />
      <h1>Guia de perdida de biodiversidad</h1>
        {/* Sección 0 - Introducción */}
        <section className="section">
        <h2 className="section-title">0. Introducción</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
          
        </div>
        <ul className="section-points">
          <li>Explicación básica del tema</li>
          <li>Contexto histórico o general del tema</li>
          <li>Importancia del tema en la actualidad</li>
        </ul>
      </section>
        {/* Sección 1 - causas */}
        <section className="section">
        <h2 className="section-title">1. Causas</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
          
        </div>
        <ul className="section-points">
          <li>Explicación básica del tema</li>
          <li>Contexto histórico o general del tema</li>
          <li>Importancia del tema en la actualidad</li>
        </ul>
      </section>
        {/* Sección 2 - Consecuencias */}
        <section className="section">
        <h2 className="section-title">2. Consecuencias</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
          
        </div>
        <ul className="section-points">
        <li>Descripción detallada de los puntos principales</li>
          <li>Análisis de causas y efectos</li>
          <li>Ejemplos prácticos que ilustran el tema</li>
        </ul>
      </section>
        {/* Sección 3 - Soluciones */}
        <section className="section">
        <h2 className="section-title">3. Soluciones</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
          
        </div>
        <ul className="section-points">
        <li>Resumen de los puntos principales</li>
          <li>Impacto y consecuencias futuras</li>
          <li>Reflexión final sobre la importancia de este tema</li>
        </ul>
      </section>
     
        {/* Sección 4 - Conclusion */}
        <section className="section">
        <h2 className="section-title">4. Conclusión</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
          
        </div>
        <ul className="section-points">
        <li>Resumen de los puntos principales</li>
          <li>Impacto y consecuencias futuras</li>
          <li>Reflexión final sobre la importancia de este tema</li>
          <li>la importancia de actuar. Permite cerrar el ciclo del análisis destacando qué se ha aprendido</li> 
          <li>y enfatizando la urgencia o relevancia de las soluciones propuestas.</li>
        </ul>
      </section>
     <button className="btn">
              <div className="wrapper">
                <a href="/quiz" className="inicio">INICIAR PARTIDA</a>
                {[...Array(6)].map((_, i) => (
                  <div className={`flower flower${i + 1}`} key={i}>
                    {[...Array(4)].map((_, j) => (
                      <div className={`petal ${["one", "two", "three", "four"][j]}`} key={j} />
                    ))}
                  </div>
                ))}
              </div>
            </button>
    </>
  );
};
export default Biodiversity;