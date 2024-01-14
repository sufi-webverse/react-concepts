import React, { Suspense, lazy, useState } from "react";
import styles from "./ColorPicker.module.css";
import LoaderCircle from "./loaders/LoaderCircle";
const ColorPickerChild = lazy(() => import("./ColorPickerChild"));

const ColorPickerParent = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <h3>Color Picker Parent</h3>
      <div className={styles.colorbox} style={{ backgroundColor: color }}></div>
      <Suspense fallback={<div>jkbh...</div>}>
        <ColorPickerChild color={color} setColor={setColor} />
      </Suspense>
    </>
  );
};

export default ColorPickerParent;
