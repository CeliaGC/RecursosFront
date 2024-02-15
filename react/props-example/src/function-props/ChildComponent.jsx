import React from 'react';

const ChildComponent = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

export default ChildComponent;


