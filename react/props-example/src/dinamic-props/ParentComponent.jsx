import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
//Este componente determina el valor de user y de isLogged.
//Hay que suponer que isLoged cambiará dinámicamente si hay o no registrado usuario, y que los datos de usuario vienen
//de un proceso real de login, de verificación de usuario y contraseña.
//Ahora para ver la diferencia, modificamos manualmente isLogged
    const [isLogged, setIsLogged] = useState(false)
    const user = {
      name: 'John Doe',
      email: 'john@example.com'
    };
  
    return (
      <div>
        <ChildComponent user={user} isLogged={isLogged}/>
      </div>
    );
  }
  
  
  export default ParentComponent;
  