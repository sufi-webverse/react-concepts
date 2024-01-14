const ColorPickerChild = ({ color, setColor }) => {
  return (
    <>
      {color}
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
};

export default ColorPickerChild;
