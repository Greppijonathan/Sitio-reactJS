import React from "react";
import '../estilos/componentes/pagina/Practicasprofesionalizantes.css'
const Practicasprofesionalizantes = (props) => {
    return (
        <main class="holder-main">
            <div class="fotos-practicas">
                <div class="container">
                    <h2 class="infofotos">Carrusel de fotos </h2>
                    <div id="fotos-practicas">
                        <img src="Galeria1.jpg" class="d-block w-100" alt="Imagen 1" />
                        <img src="Galeria2.jpg" class="d-block w-100" alt="Imagen 2" />
                        <img src="Galeria3.png" class="d-block w-100" alt="Imagen 3" />
                        <img src="Galeria4.jpg" class="d-block w-100" alt="Imagen 4" />
                        <img src="Galeria5.png" class="d-block w-100" alt="Imagen 5" />
                        <img src="Galeria6.png" class="d-block w-100" alt="Imagen 6" />
                    </div>
                </div>
            </div>
            <div class="info-practicas">
                <h2>Descripcion de la seccion </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                    est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                    repellat corporis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt porro, quia repellat dolorum
                    modi laborum, quo ea ducimus ullam consectetur iusto, cumque natus possimus? Nulla ipsam voluptatem
                    laudantium expedita?</p>
            </div>
            <div class="info-empresas">
                <h2>Empresas con las que trabajamos </h2>
                <ul>
                    <li>Empresa 1 con su logo</li>
                    <li>Empresa 2 con su logo</li>
                    <li>Empresa 3 con su logo</li>
                    <li>Empresa 4 con su logo</li>
                    <li>Empresa 5 con su logo</li>
                </ul>
            </div>
        </main>
    );
}

export default Practicasprofesionalizantes;