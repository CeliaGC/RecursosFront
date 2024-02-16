import ChildComponent from "./ChildComponent";
import { useState } from "react";


const ParentComponent = () => {

  //Este elemento padre importa el componente hijo y le dice cuál va a ser el valor de disabled y cuál es la función
  //que se ejecuta al hacer click. 
  //Al hacer click se ejecuta handlesubmit, que deshabilita el botón pasando un estado true a la prop disabled.
  //Tanto el estado booleano como la función son externos al componente del bótón
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