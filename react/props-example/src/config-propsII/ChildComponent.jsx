
const ChildComponent = ({ disabled, handleclick }) => {
  return (
    <form>

      <input type="text" />
      <input type="submit" value="Submit" disabled={disabled} onClick={handleclick} />
    </form>
  );
};

export default ChildComponent;



