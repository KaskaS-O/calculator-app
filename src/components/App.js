import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ResultPanel from "./ResultPanel";
import Keyboard from "./Keyboard";

function App() {
  // const [result, setResult] = useState(0);
  // const [calc, setCalc] = useState("");
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
    console.log("Delete");
  };

  const handleEqual = () => {
    const number = Number(calc.number.replace(",", "."));
    const result = Number(calc.result);
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
    setCalc({
      sign: value,
      result: !calc.result && calc.number ? calc.number : calc.result,
      number: 0,
    });
  };

  const handleDot = () => {
    if (calc.number.indexOf(",") !== -1) {
      return;
    } else if (!calc.number) {
      setCalc({ ...calc, number: "0," });
    } else {
      setCalc({ ...calc, number: calc.number + "," });
    }
  };

  const handleNumber = (e) => {
    const activeNumber = e.target.innerText;
    if (calc.number === 0) {
      if (activeNumber === "0") {
        setCalc({ ...calc, number: 0, result: !calc.sign ? 0 : calc.result });
      } else {
        setCalc({
          ...calc,
          number: activeNumber,
          result: !calc.sign ? 0 : calc.result,
        });
      }
    } else {
      setCalc({
        ...calc,
        number: calc.number + activeNumber,
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };
  console.log(calc);

  // const handleClick = (e) => {
  //   const activeKey = e.target.innerText;
  //   const keyType = e.target.dataset.type;
  //   let number = calc;

  //   if (
  //     keyType === "number" ||
  //     (keyType === "operation" && activeKey !== "=")
  //   ) {
  //     setCalc(calc + activeKey);
  //   }
  //   if (keyType === "operation") {
  //     if (!calc) {
  //       return;
  //     } else {
  //       switch (activeKey) {
  //         case "+":
  //           break;
  //         case "-":
  //           break;
  //         case "x":
  //           break;
  //         case "/":
  //           break;
  //         default:
  //           return;
  //       }
  //       // if (activeKey === "+") {
  //       // } else if (activeKey === "-") {
  //       // } else if (activeKey === "x") {
  //       // } else if (activeKey === "/") {
  //       // }
  //     }
  //   } else if (keyType === "function") {
  //   }
  // };

  return (
    <div className="calc">
      <h1 className="title calc__title">calc</h1>
      <ThemeToggle />
      <ResultPanel calc={calc.result ? calc.result : calc.number} />
      <Keyboard
        // numbers={numbers}
        // operations={operations}
        keys={keys}
        handleReset={handleReset}
        handleDelete={handleDelete}
        handleEqual={handleEqual}
        handleOperation={handleOperation}
        handleDot={handleDot}
        handleNumber={handleNumber}
      />
    </div>
  );
}

export default App;
