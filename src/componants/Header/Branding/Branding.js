import React from "react";
import ReactDOM from "react-dom";
import { branding } from "../../../common/utils/ConfigConstant";
import "./branding.scss";

const Branding = () => {
  if (branding.logo) {
    return <img className="logo" src={branding.logo} alt="logo" />;
  } else {
    return (
      <h1>
        {branding.title} <span>{branding.subtitle}</span>
      </h1>
    );
  }
};

export default Branding;
