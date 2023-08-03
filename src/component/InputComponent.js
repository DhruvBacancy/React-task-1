const InputComponent = ({ value, onChange, onAdd, disabled }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onAdd} disabled={disabled}>
        Add
      </button>
    </div>
  );
};

export default InputComponent;
