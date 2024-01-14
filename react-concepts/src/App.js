import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function ColorPicker() {
  
  return (
    
  )
}

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="App">
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
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
