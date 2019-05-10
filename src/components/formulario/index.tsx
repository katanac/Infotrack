import React from 'react';

interface IFormularioProps {
    nombres:string;
    apellidos:string;
    numDoc:string;
    guardarPersona: () => void;
    manejarPersona:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
  //a cada input de majeno persona le doy el valor que necesito guardar
const Formulario: React.FunctionComponent<IFormularioProps> = ({nombres, apellidos, numDoc,guardarPersona ,manejarPersona}) => (<div>
  
    <input onChange={manejarPersona} type="text" value ={nombres} name="nombres" />
    <input onChange={manejarPersona} type="text" value ={apellidos} name="apellidos"  />
    <input onChange={manejarPersona} type="text" value ={numDoc} name="numDoc" />
    <button onClick={guardarPersona} id="Boton">Guardar Nueva Persona</button>
</div>);

export default Formulario;