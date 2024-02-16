import ChildComponent from "./ChildComponent";

//Este componente importa el componente hijo que lista elementos y espera recibir por parámetro esos elementos.
//El componente le pasa como argumento los items que se van a renderizar, que son los strings del array "items".

const ParentComponent = () => {

    const items = ['Item 1', 'Item 2', 'Item 3'];
  
    return (
      <div>
        <h2>Lista de elementos</h2>

        <ChildComponent items={items} />
      </div>
    );
  };
  
  export default ParentComponent;
  