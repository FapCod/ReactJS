import React from "react";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";
import imagen from "../images/NotFound.svg";
function NotFound() {
  return (
    <div className="padre">
      <div className="columna">
        <div className="centrar">
          <img className="img" src={imagen} alt="NotFound" />
          <h1>UPPS ALGO SALIO MAL HERMANO</h1>
          <p>La pagina que buscabas no fue encontrada</p>
          <Link className="btn btn-primary" to="/">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
