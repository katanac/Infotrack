import React from 'react';
import './App.css';
import TablaPersonas from './components/Personas/index';


import Personas from './personas.json';
console.log(Personas);

const App: React.FC = () => {
  return <TablaPersonas />
}

export default App;
