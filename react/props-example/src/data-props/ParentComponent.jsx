import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    // Array de elementos
    const items = ['Item 1', 'Item 2', 'Item 3'];
  
    return (
      <div>
        <h2>Lista de elementos</h2>
        {/* Renderizar el componente hijo y pasar el array de elementos como prop */}
        <ChildComponent items={items} />
      </div>
    );
  };
  
  export default ParentComponent;
  