import React from "react";
import "../css/buttonReset.css";

const ButtonReset = (props) => (
  <div className="boton-Reset" onClick={props.manejarReset}>
    {props.children}
  </div>
);

export default ButtonReset;

//** linea 5, atributo onClick para asignar la función "manejarClear"enviada como un props**/
