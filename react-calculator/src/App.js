import "./App.css";
import { useState } from "react";
import {evaluate} from "mathjs"




function App() {

const calcButtons = [
  ["(", ")", " ^ ", " AC "],
  ["7", "8", "9", " / "],
  ["4", "5", "6", " * "],
  ["1", "2", "3", " - "],
  ["0", ".", " = ", " + "],
];
const [windowValue,setwindowValue] = useState("")

  const handleClick = (value) => {
    setwindowValue(windowValue + value) 
    if (value === " = ") {
      setwindowValue(evaluate(windowValue))
    }
    if (value === " AC ") {
      setwindowValue("")
    }
  };

  return (
    <div className="calculator">
      <div className="window">
        <h1>{windowValue}</h1>
      </div>
      <div className="buttons">
        {calcButtons.flat().map((calcButtons, index) => {
          return (
            <Button
              key={index}
              label={calcButtons}
              click={() => handleClick(calcButtons)}
            />
          );
        })}
        </div>
    </div>
  );
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}>{props.label}</button>
    </div>
  );
};
export default App;
