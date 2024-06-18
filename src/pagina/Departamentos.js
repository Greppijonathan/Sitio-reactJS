import React from "react";
import '../estilos/componentes/pagina/Departamentos.css'

const Departamentos = (props) => {
    return (
        <main class="holder-main">
            <div class="descripcion">
                <h2>Nuestros departamentos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                    est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                    repellat corporis?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                    est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                    repellat corporis?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                    est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                    repellat corporis?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                    est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                    repellat corporis?</p>
            </div>
            <div class="contenedordepartamentos">
                <div class="depto">
                    <h4>Ciclo basico</h4>
                    <img src="deptobasica.png" alt="basica" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore optio praesentium
                        tempora
                        sapiente accusantium enim accusamus. Excepturi ea quam repellat accusantium laudantium, porro optio
                        pariatur labore quaerat minima perspiciatis.</p>
                </div>
                <div class="depto">
                    <h4>Electronica</h4>
                    <img src="deptoelectronica.png" alt="electronica" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore optio praesentium
                        tempora
                        sapiente accusantium enim accusamus. Excepturi ea quam repellat accusantium laudantium, porro optio
                        pariatur labore quaerat minima perspiciatis.</p>
                </div>
                <div class="depto">
                    <h4>Electromecanica</h4>
                    <img src="deptomecanica.png" alt="electromecanica" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore optio praesentium
                        tempora
                        sapiente accusantium enim accusamus. Excepturi ea quam repellat accusantium laudantium, porro optio
                        pariatur labore quaerat minima perspiciatis.</p>
                </div>
                <div class="depto">
                    <h4>Alimentos</h4>
                    <img src="deptoalimentos.png" alt="alimentos" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore optio praesentium
                        tempora
                        sapiente accusantium enim accusamus. Excepturi ea quam repellat accusantium laudantium, porro optio
                        pariatur labore quaerat minima perspiciatis.</p>
                </div>
            </div>
        </main>
    );
}
export default Departamentos;