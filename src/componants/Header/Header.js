import React from "react";
import ReactDOM from "react-dom";
import Branding from "./Branding/Branding";
import Navbar from "./Navbar/navbar";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <Branding />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
