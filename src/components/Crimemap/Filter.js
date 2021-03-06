import React from 'react';

// the UI component for filtering the subway entrances by subway municipios
export default (props) => {
  const { municipioss, filterLines } = props;

  // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
  // notice in the select element onChange is set to the updateFilter method
  // thus when a user selects a new subway municipios to view, the component passes the new filter value
  // to the parent component, Map, which reloads the GeoJSON data with the current filter value

  return (
    < div className="filterMunicipios" >
      <h2><b>delitos por alcaldía en CDMX</b></h2>
      <h6>datos de <a href="http://www.beta.inegi.org.mx/app/biblioteca/ficha.html?upc=702825218744" target="_blank" rel="noopener noreferrer">INEGI</a> y <a href=" https://datos.gob.mx/busca/dataset/secretariado-ejecutivo-del-sistema-nacional-de-seguridad-publica/resource/72c3ac06-b5db-4ba1-842b-6fbd81dafd33" target="_blank" rel="noopener noreferrer">SEGOB</a></h6>
      <h6>Instituto Nacional de Estadística y Geografía</h6>
      <h6>Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública</h6>
      <a href="/signup">registrarse</a>&nbsp;&nbsp;<a href="/login">iniciar sesión</a>
      <br></br><a href="/sharedmap">agregar delito</a>
      <br></br>
      <br></br>
      <select defaultValue="*"
        type="select"
        name="filtermunicipioss"
        onChange={(e) => filterLines(e)}>
        { /* We render the select's option elements by maping each of the values of subwayLines array to option elements */}
        {
          municipioss.map((municipios, i) => {

            return (

              < option value={municipios} key={i} > {municipios}</option>
            );
          }, this)
        }
      </select>
    </div >
  );
};
