import ChildComponent from "./ChildComponent";

//Este componente padre importa el componente hijo y pasa valores a las props de color, tamaño de fuente y texto, que a su vez 
//están determinando en el componente hijo las propiedades css de un texto dentro de la etiqueta style.

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