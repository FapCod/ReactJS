import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import imag from "../images/astronauts.svg";
function Home() {
  return (
    <div className="Home">
      <div className="Home__col">
        <div className="centar_img">
          <img src={imag} alt="LogoHome" />
        </div>
        <div className="centrar_text">
          <h1>Bienvenido estimado usuario</h1>
          <p>Puedes crear nuevos Badges</p>
          <Link className="btn btn-primary" to="/Badges">
            Ver los badges
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
