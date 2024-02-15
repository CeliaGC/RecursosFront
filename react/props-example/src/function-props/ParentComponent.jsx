import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h2>Componente Padre</h2>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
  