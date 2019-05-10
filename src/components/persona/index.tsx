import React from 'react';
import IPersona from '../interfaces/persona';
interface IPersonaProps {
    persona: IPersona
    eliminarPersona: (id: number) => void;
    editarPersona: (id: number) => void;
}

//creacion del formulario que muestra los datos que envio
//botones de eliminar persona y editar persona
const Persona: React.FunctionComponent<IPersonaProps> = ({ persona, eliminarPersona, editarPersona }) => {
    return (
        <tr>
            <th>{persona.id}</th>
            <th>{persona.nombres}</th>
            <th>{persona.apellidos}</th>
            <th>{persona.numDoc}</th>
            <th>

                <button onClick={() => eliminarPersona(persona.id!)}>Eliminar persona</button>
                <button onClick={() => editarPersona(persona.id!)}>Editar Persona</button>

            </th>
        </tr>
    )
}


export default Persona;