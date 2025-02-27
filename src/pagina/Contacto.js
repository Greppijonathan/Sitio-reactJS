import React from "react";
import '../estilos/componentes/pagina/Contacto.css'

const Contacto = (props) => {
    return (
        <main className="holder-contacto">
            <div className="contactorapido">
                <h2>Contacto rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" name="Nombre" />
                    </p>
                    <p>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label htmlFor="Telefono">Teléfono</label>
                        <input type="text" name="Telefono" />
                    </p>
                    <p>
                        <label htmlFor="Mensaje">Mensaje</label>
                        <input type="text" name="Mensaje" />
                    </p>
                    <p>
                        <input type="submit" name="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras formas de contacto</h2>
                <p>Nos puede contactar por los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 0237 488 888</li>
                    <li>Email: uncorreo@abc.gob.ar</li>
                    <li>Facebook: unTacebook</li>
                    <li>Twitter: unTwiter</li>
                    <li>Skype: unSkype</li>
                </ul>
            </div>
        </main>
    );
}

export default Contacto;
