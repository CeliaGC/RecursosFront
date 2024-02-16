import React from 'react';

// Componente hijo
//Este componente tiene unas props de color, tamaño de fuente y texto que van a otorgar un valor a las propiedades css del mismo nombre.
//El componente padre determinará el valor de esas propiedades css
const ChildComponent = ({ color, fontSize, text }) => {
  return (
    <div>
      <h3>Mi padre me dice cómo debe lucir mi texto:</h3>
      <p style={{color:color}}>Color: {color}</p>
      <p style={{fontSize:fontSize}}>Tamaño de fuente: {fontSize}</p>
      <p style={{color:color, fontSize:fontSize}}> {text}</p>
    </div>
  );
};



export default ChildComponent;
