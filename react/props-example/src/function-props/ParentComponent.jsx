import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
//Este componente le dice al componente hijo qué función ejecuta. Un ridículo console.log.
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
  