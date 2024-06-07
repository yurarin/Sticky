import React from "react";
import "../styles/Header.css";
import { Logo } from "../assets/index";
import { Link } from "react-router-dom";


const Header = () => {
  const version = "0.1.0";

  return (
    <header className="viewContainer">
      <div className="headerItem">
        <Link to="/">
          <img src={Logo} alt="img" />
        </Link>
      </div>
      <div className="headerItem">
        <p>Ver {version}</p>
      </div>
    </header>
  );
};

export default Header;
