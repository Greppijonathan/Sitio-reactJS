import React from "react";
import '../../estilos/componentes/layout/header.css';

const Header = (props) => {
    return (
        <header>
            <div class="holder-encabezado">
                <div><img src="LogoTapie.png" width="150" alt="logotipo"></img></div>
                <div>
                    <h1><b>Escuela de Educacion Secundaria Tecnica N°1</b></h1>
                    <h1><b>Javier Tapie </b></h1>
                    <h2>General Rodriguez - Pcia. Buenos Aires</h2>
                </div>
            </div>
        </header>
    );
}
export default Header;

