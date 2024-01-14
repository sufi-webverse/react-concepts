import logo from "./logo.svg";
import React, { useState, useMemo } from "react";
import "./App.css";

function ColorPicker({ colors, setColor }) {
  console.log("ColorPicker render", colors);
  return (
    <>
      {colors.map((c) => {
        <p>{c}</p>;
      })}
      {/* <input type="color" onChange={(e) => setColor(e.target.value)} /> */}
    </>
  );
}

function App() {
  console.log("App render");
  const [color, setColor] = useState("white");
  const [colors] = useState(["red", "green", "blue", "white"]);
  const selectedColor = useMemo(() => {
    return colors.find((c) => {
      return c === color;
    });
  }, [color, colors]);

  return (
    <div className="App">
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <h2>Color Picker</h2>
      <h3>Selected color: {selectedColor}</h3>
      {colors.length}
      {colors.map((c) => {
        return (
          <>
            <p onClick={() => setColor(c)}>{c}</p>
            <br />
          </>
        );
      })}
      <ColorPicker colors={colors} setColor={setColor} />
      <h2>Accordion</h2>
      <details>
        <summary>Question 1</summary>
        <p>Answer 1</p>
      </details>
      <details>
        <summary>Question 2</summary>
        <p>Answer 2</p>
      </details>
      <details>
        <summary>Question 3</summary>
        <p>Answer 3</p>
      </details>
    </div>
  );
}

export default App;
