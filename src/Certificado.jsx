import "./styles.css";

const Certificado = () => {
  return (
    <div className="App">
      <div className="header">
        <img
          className="logo"
          src="https://www.minsa.gob.pe/salud-mental/img/logo_minsa-2020.jpg"
          alt="MINSA"
        />
        <h1>CERTIFICADO DE VACUNACIÓN </h1>
      </div>
      <div className="content">
        <table className="datos">
          <tr>
            <td>
              <tr> Nombre </tr>
              <tr> POZO FABIAN, PIERO</tr>
            </td>
            <td>
              <tr> FECHA NACIMIENTO </tr>
              <tr> 14/05/2002</tr>
            </td>
            <td rowSpan="3">
              <img
                src="https://latam.kaspersky.com/content/es-mx/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png"
                width={80}
                height={80}
                alt="codigo qr"
              />
            </td>
          </tr>
          <tr>
            <td>
              <tr> DOCUMENTO DE IDENTIDAD </tr>
              <tr> 73588926</tr>
            </td>
            <td>
              <tr> NACIONALIDAD </tr>
              <tr> PERU</tr>
            </td>
          </tr>
          <tr>
            <td>
              <tr> SEXO </tr>
              <tr> M</tr>
            </td>
            <td>
              <tr> VACUNA </tr>
              <tr> Vacuna contra COVID</tr>
            </td>
          </tr>
        </table>
        <table border="1px solid" className="vacunas">
          <tr>
            <th>Fecha Vacunación</th>
            <th>Dosis</th>
            <th>Fabricante y Lote de Vacuna</th>
            <th className="lugar">Lugar de Vacunación</th>
          </tr>
          <tr>
            <td> 17/07/2021 </td>
            <td className="numero"> 1° Dosis </td>
            <td> SINOPHARM</td>
            <td className="lugar">
              HUANUCO - I.E. MILAGRO DE FATIMA - HUANUCO HUANUCO HUANUCO
            </td>
          </tr>
          <tr>
            <td> 15/08/2021 </td>
            <td className="numero"> 2° Dosis </td>
            <td> SINOPHARM</td>
            <td className="lugar">
              HUANUCO - I.E. MILAGRO DE FATIMA - HUANUCO HUANUCO HUANUCO
            </td>
          </tr>
          <tr>
            <td> 21/12/2021 </td>
            <td className="numero"> 3° Dosis </td>
            <td> SINOPHARM</td>
            <td className="lugar">
              HUANUCO - I.E. MILAGRO DE FATIMA - HUANUCO HUANUCO HUANUCO
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Certificado;
