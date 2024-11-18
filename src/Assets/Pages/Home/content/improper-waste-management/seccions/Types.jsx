import "../css/Types.css"; // Importa el nuevo CSS
import Header from "../../../../Header/Header";



const Management = () => {
    return (
        <>
            <Header />
            <div className="page-container" style={{ backgroundColor: "#8B5E3C", height: "100vh", padding: "20px" }}>
                {/* Título principal */}
                <div className="title" style={{
                    textAlign: "center",
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#4CAF50",
                    marginBottom: "20px"
                }}>
                    Tipos de residuos
                </div>

                {/* Contenedor de contenido */}
                <div className="content-box" style={{
                    backgroundColor: "#F4A261",
                    margin: "0 auto",
                    width: "60%",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                    textAlign: "center",
                }}>
                    <h2 style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black",
                        margin: 0,
                    }}>
                        Selecciona el tipo de residuo del que requieras información
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Management;
