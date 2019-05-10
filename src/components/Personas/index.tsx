import React from "react";
import IPersona from "../interfaces/persona";
import Formulario from "../formulario"
import Persona from '../persona/index';

const Personas: React.FunctionComponent = () => {
  const [Personas, setPersonas] = React.useState<IPersona[]>([]);
  //contenedor persona
  const [persona, setPersona] = React.useState<IPersona>({nombres:'',apellidos:'',numDoc:''});

  React.useEffect(() => {
    cargarPersona();
  }, []);

  const cargarPersona = () => {
    fetch("http://165.227.97.189:3006/personas")
   //fetch("http://172.16.100.31:3032/api/personas")
      .then(resultado => {
        return resultado.json();
      })
      .then((personas: IPersona[]) => {
        setPersonas(personas);
      });
  };

  
  //constante que permite el manejo de informacion persona
  const manejarPersona = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPersona({...persona, [name]:value});
  };

  
  //constante que permite guardar la  informacion de la persona
  const guardarPersona = () => {
   
      fetch("http://165.227.97.189:3006/personas"
      //fetch("http://172.16.100.31:3032/api/personas"
      , {
        method: "POST",
        body: JSON.stringify( persona ),
        headers: new Headers({ "content-type": "application/json" })
      }).then(() => {

          setPersona({nombres:'',apellidos:'',numDoc:''})
        cargarPersona();
      });
    
  };

  //constante que permite eliminar informacion de la persona por medio del id
  const eliminarPersona = (id: number) => {
    fetch(`http://165.227.97.189:3006/personas/${id}`
    //fetch(`http://172.16.100.31:3032/api/personas/${id}`
    , {
      method: "DELETE"
    }).then(() => {
      cargarPersona();
    });
  };

//constante que permite editar informacion persona
  const editarPersona = (id: number) => {
    fetch(`http://165.227.97.189:3006/personas/${id}`
   //fetch(`http://172.16.100.31:3032/api/personas/${id}`
   , {
      method: "PUT",
      body: JSON.stringify({...persona,id}),
    headers: new Headers({ "content-type": "application/json" })
    }).then(() => {
      cargarPersona();
    });
  };


  return (
    <div className="Personas">
      <div>
          <Formulario
          nombres={persona.nombres}
          apellidos={persona.apellidos}
          numDoc={persona.numDoc}
          manejarPersona ={manejarPersona}
          guardarPersona ={guardarPersona}
          />
        <table>
            

          {Personas.map(persona => (
            <Persona  
            editarPersona = {editarPersona}
            eliminarPersona={eliminarPersona}
            persona={persona} 
            />
          ))} 
         
        
        
        </table>
      </div>
    </div>
  );
};

export default Personas;
