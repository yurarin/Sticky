import React from "react";
import "../styles/Header.css";
import { Logo } from "../assets/index";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <header className="viewContainer">
      <div className="headerItem">
        <Link to="/home">
          <img src={Logo} alt="img" />
        </Link>
      </div>
      <div className="headerItem">
        <p>Ver {props.version}</p>
      </div>
    </header>
  );
};

export default Header;
