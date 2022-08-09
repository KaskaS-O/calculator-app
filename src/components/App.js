import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ResultPanel from "./ResultPanel";
import Keyboard from "./Keyboard";

function App() {
  const [result, setResult] = useState({
    result: 0,
  });
  const keys = [
    { id: "0", type: "number" },
    { id: "1", type: "number" },
    { id: "2", type: "number" },
    { id: "3", type: "number" },
    { id: "4", type: "number" },
    { id: "5", type: "number" },
    { id: "6", type: "number" },
    { id: "7", type: "number" },
    { id: "8", type: "number" },
    { id: "9", type: "number" },
    { id: ".", type: "number" },
    { id: "+", type: "operation" },
    { id: "-", type: "operation" },
    { id: "x", type: "operation" },
    { id: "/", type: "operation" },
    { id: "=", type: "operation" },
    { id: "del", type: "function" },
    { id: "reset", type: "function" },
  ];

  const handleInputChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className="calc">
      <h1 className="title calc__title">calc</h1>
      <ThemeToggle />
      <ResultPanel result={result} handleChange={handleInputChange} />
      <Keyboard keys={keys} />
    </div>
  );
}

export default App;
