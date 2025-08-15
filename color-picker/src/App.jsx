import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const colors = ["#ff0000", "#FAEBD7", "#00FFFF", "#D2691E"];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <h1>Color Picker</h1>
      <div className="color-palette"></div>
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        ></div>
      ))}
    </div>
  );
}

export default App;
