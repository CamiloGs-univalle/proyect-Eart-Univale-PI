import Header from "../../../../Header/Header";
import Pisoquiz from "../model/pisoquiz";
import { modelcanvatres } from "../modelocanvas/modelcanvas";

const Quizsoil = () => {
    return (
        <>
            <Header />
            <h1 className="titulo">Erosión del Suelo</h1>

            <div>
                {modelcanvatres}
            </div>

        </>
    );
};

export default Quizsoil;

