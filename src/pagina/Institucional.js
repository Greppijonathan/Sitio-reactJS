import React from "react";
import '../estilos/componentes/pagina/Institucional.css'

const Institucional = (props) => {
    return (
        <main className="holder">
            <div>
                <img className="foto-escuela" src="EscuelaFoto.png" alt="escuela" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </section>
                <section className="carreras">
                    <h2>Nuestras carreras</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </section>
            </div>
        </main>
    );
}

export default Institucional;

