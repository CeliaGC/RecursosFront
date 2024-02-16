import React from 'react';

//Este componente va a listar una serie de items cuyo valor es una prop, es decir, es un parámetro
// cuyo valor determinará su componente padre
 const ChildComponent = ({ items }) => {
  return (
    <ul style={{ backgroundColor: 'lightgray', padding: '10px' }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ChildComponent;
