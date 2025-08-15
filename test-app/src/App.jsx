import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  const incrementCount = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
