import ChildComponent from "./ChildComponent";


const ParentComponent = () => {

  const config = {
    color: 'red',
    fontSize: '30px',
    text: 'Un horror de texto'
  };

  return (
    <div>
      <h2>Componente Padre</h2>
      <ChildComponent color={config.color} fontSize={config.fontSize} text={config.text}/>
    </div>
  );
};

export default ParentComponent;