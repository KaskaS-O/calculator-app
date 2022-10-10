import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ResultPanel from "./ResultPanel";
import Keyboard from "./Keyboard";

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  const keys = [
    { name: "0", id: "0", type: "number" },
    { name: "1", id: "1", type: "number" },
    { name: "2", id: "2", type: "number" },
    { name: "3", id: "3", type: "number" },
    { name: "4", id: "4", type: "number" },
    { name: "5", id: "5", type: "number" },
    { name: "6", id: "6", type: "number" },
    { name: "7", id: "7", type: "number" },
    { name: "8", id: "8", type: "number" },
    { name: "9", id: "9", type: "number" },
    { name: ".", id: "dot", type: "number" },
    { name: "+", id: "plus", type: "operation" },
    { name: "-", id: "minus", type: "operation" },
    { name: "x", id: "x", type: "operation" },
    { name: "/", id: "slash", type: "operation" },
    { name: "=", id: "equal", type: "operation" },
    { name: "del", id: "del", type: "function" },
    { name: "reset", id: "reset", type: "function" },
  ];

  const handleReset = () => {
    setCalc({
      sign: "",
      number: 0,
      result: 0,
    });
  };
  const handleDelete = () => {
    if (calc.number) {
      const number = calc.number.toString().slice(0, -1);
      setCalc({ ...calc, number: Number(number) });
    }
  };

  const handleEqual = () => {
    const { number, result } = calc;
    if (calc.number && calc.sign) {
      switch (calc.sign) {
        case "+":
          setCalc({
            number: 0,
            result: result + number,
            sign: "",
          });
          break;
        case "-":
          setCalc({
            number: 0,
            result: result - number,
            sign: "",
          });
          break;
        case "x":
          setCalc({
            number: 0,
            result: result * number,
            sign: "",
          });
          break;
        case "/":
          setCalc({
            number: 0,
            result: result / number,
            sign: "",
          });
          break;
        default:
          return;
      }
    }
  };

  const handleOperation = (e) => {
    const value = e.target.innerText;

    if (typeof calc.number === "number") {
      setCalc({
        sign: value,
        result: !calc.result && calc.number ? calc.number : calc.result,
        number: 0,
      });
    } else return;
  };

  const handleDot = (e) => {
    const dot = e.target.innerHTML;

    if (!calc.number) {
      setCalc({ ...calc, number: 0 + dot });
    } else if (!calc.number.toString().includes(".")) {
      setCalc({ ...calc, number: calc.number + dot });
    } else {
      return;
    }
  };

  const handleNumber = (e) => {
    const activeNumber = e.target.innerText;
    if (calc.number === 0) {
      if (activeNumber === "0") {
        setCalc({
          ...calc,
          number: 0,
          result: !calc.sign ? 0 : calc.result,
        });
      } else {
        setCalc({
          ...calc,
          number: Number(activeNumber),
          result: !calc.sign ? 0 : calc.result,
        });
      }
    } else {
      setCalc({
        ...calc,
        number: Number(calc.number + activeNumber),
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };

  return (
    <>
      <div className="calc">
        <h1 className="title calc__title">calc</h1>
        <ThemeToggle />
        <ResultPanel calc={calc.number ? calc.number : calc.result} />
        <Keyboard
          keys={keys}
          handleReset={handleReset}
          handleDelete={handleDelete}
          handleEqual={handleEqual}
          handleOperation={handleOperation}
          handleDot={handleDot}
          handleNumber={handleNumber}
        />
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">CodingDuck</a>.
      </div>
    </>
  );
}

export default App;
