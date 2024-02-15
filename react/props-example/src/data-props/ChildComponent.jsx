import React from 'react';

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
