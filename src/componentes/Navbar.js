import React from "react";
import logo from "../images/logo.svg";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img src={logo} alt="logo" className="Navbar__brand-logo"></img>
            <span className="font-weight-light">Conferencia</span>
            <span className="font-weight-bold">Fapcod</span>
          </Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
