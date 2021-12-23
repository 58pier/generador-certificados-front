import "./styles.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "https://generador-certificados-minsa.herokuapp.com//upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="formulario">
      <h2>Generador de Carne de Vacunación</h2>
      <p> Ingrese el archivo </p>
      <input name="archivo" type="file" accept="application/pdf" />
      <br />
      <button onClick={uploadFile}>Enviar</button>
    </div>
  );
};
export default App;
