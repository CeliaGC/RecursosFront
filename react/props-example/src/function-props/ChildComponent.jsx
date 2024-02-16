import React from 'react';

const ChildComponent = ({ handleClick }) => {
  //Este botón ejecuta una función que recibe de otro componente mediante props 
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

export default ChildComponent;


