import React from "react";
import '../estilos/componentes/pagina/Galeria.css'

const Galeria = (props) => {
    return (
        <main className="holder-main">
            <div className="infofotos">
                <h2>Mira nuestras fotos!</h2>
            </div>
            <div className="galeria">
                <img src="Galeria1.jpg" alt="" />
                <img src="Galeria2.jpg" alt="" />
                <img src="Galeria3.png" alt="" />
                <img src="Galeria4.jpg" alt="" />
                <img src="Galeria5.png" alt="" />
                <img src="Galeria6.png" alt="" />
            </div>
        </main>
    );
}
export default Galeria;
