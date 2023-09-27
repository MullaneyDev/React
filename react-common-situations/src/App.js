import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {

  const [numbers, setNumbers] = useState([1,2,3,4,5])

  // Editing an array in a state

  const addNumber =() => {
    const storedNumbers = [...numbers]
    storedNumbers.push(storedNumbers[storedNumbers.length -1] + 1)
    setNumbers(storedNumbers)
  }
  const removeHandler = (clickedIndex) => {
        const storedNumbers = [...numbers];
        storedNumbers.splice(clickedIndex, 1);
        setNumbers(storedNumbers);
  }

  const [inputText,setInputText] = useState("")

  const changeHandler = (event) => {
    setInputText(event.target.value)
  }

  return (
    <div className="App">
      <h1>Common Situations</h1>
      <React.Fragment>  
      {numbers.map((number,index) => {
        return <p key={index} onClick={() => removeHandler(index)}>{number}</p>
      })}
      <button onClick={addNumber}>Add a number</button>
      </React.Fragment>
      <br />
      <br />
      <>
      <input type='text' onChange={changeHandler}></input>
      <p>{inputText}</p>
      </>
    </div>
  );
}

// <React.Fragment></React.Fragment> = creates a ghost div. only to be used when not applying CSS to the div
// <> </> = shorthand for ghost div
export default App;
