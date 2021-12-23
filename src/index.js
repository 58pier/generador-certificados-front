import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import Certificado from "./Certificado";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Certificado /> */}
    <App />
  </StrictMode>,
  rootElement
);
