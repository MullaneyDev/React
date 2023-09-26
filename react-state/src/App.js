import { useState } from "react";
import "./App.css";

function App() {
  // const [message, setMessage] = useState("Hello");
  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
    // console.log("Hello World");

    // setMessage(message + " Hello")
    setToggle(!toggle)
  };

  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
setCount((count - 1));
  }

  return (
    <div className="App">
      <h1>React State</h1>
      <button onClick={handleClick}>{(toggle) ? "Show" : "Hide"}</button>
      {/* <p>{message}</p> */}
      {/* ternary operator shows one or other based on true or false */}
      {(toggle) ? <p>Toggle is True</p> : <p>Toggle is False</p>} 

      {/* Only shows if condition is met(true) */}
      {toggle && (
        <div>
          <h1>Short Circuit Evaluation</h1>
          <p>This only shows if True</p>
          </div>
      )}

      <h1>Challenge</h1>
      <div>
        <button onClick={plus}>+</button>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
}

export default App;
