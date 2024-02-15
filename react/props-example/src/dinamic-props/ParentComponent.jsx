import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

    const [isLoged, setIsLoged] = useState(false)
    const user = {
      name: 'John Doe',
      email: 'john@example.com'
    };
  
    return (
      <div>
        <ChildComponent user={user} isLoged={isLoged}/>
      </div>
    );
  }
  
  
  export default ParentComponent;
  