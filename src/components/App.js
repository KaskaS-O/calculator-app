import { useState } from "react";
import useLocalStorage from "use-local-storage";

import ThemeToggle from "./ThemeToggle";
import ResultPanel from "./ResultPanel";
import Keyboard from "./Keyboard";

function App() {
  const defaultTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme === null ? "1" : defaultTheme
  );

  const [calc, setCalc] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  const keys = [
    { name: "0", id: "num0" },
    { name: "1", id: "num1" },
    { name: "2", id: "num2" },
    { name: "3", id: "num3" },
    { name: "4", id: "num4" },
    { name: "5", id: "num5" },
    { name: "6", id: "num6" },
    { name: "7", id: "num7" },
    { name: "8", id: "num8" },
    { name: "9", id: "num9" },
    { name: ".", id: "dot" },
    { name: "+", id: "plus" },
    { name: "-", id: "minus" },
    { name: "x", id: "x" },
    { name: "/", id: "slash" },
    { name: "=", id: "equal" },
    { name: "del", id: "del" },
    { name: "reset", id: "reset" },
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
    const dot = e.target.innerText;

    if (!calc.number && !calc.result) {
      setCalc({ ...calc, number: 0 + dot });
    } else if (calc.number.toString().indexOf(".") === -1 && calc.number) {
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

  const switchTheme = (theme) => {
    const newTheme = theme === "1" ? "1" : theme === "2" ? "2" : "3";
    setTheme(newTheme);
  };

  return (
    <main className="wrapper" data-theme={theme}>
      <div className="calc">
        <h1 className="title calc__title">calc</h1>
        <ThemeToggle switchTheme={switchTheme} />
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
    </main>
  );
}

export default App;
