import ChildComponent from "./ChildComponent";
import { useState } from "react";


const ParentComponent = () => {
  const [isDisabled, setIsDisabled] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();
    
    setIsDisabled(true);
  };

  return (
    <div>
      <h2>Formulario</h2>

      <ChildComponent disabled={isDisabled} handleclick={handleSubmit}/>

    </div>
  );
};

export default ParentComponent;