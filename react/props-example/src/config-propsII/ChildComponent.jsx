
const ChildComponent = ({ disabled, handleclick }) => {

  //Este componente tiene un input y un botón. Las propiedades predeterminadas de disabled y onclick reciben mediante
  //props su valor
  return (
    <form>

      <input type="text" />
      <input type="submit" value="Submit" disabled={disabled} onClick={handleclick} />
    </form>
  );
};

export default ChildComponent;



