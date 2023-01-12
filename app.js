import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Branding from "./src/componants/Header/Branding/Branding";
import Header from "./src/componants/Header/Header";
import Main from "./src/componants/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
