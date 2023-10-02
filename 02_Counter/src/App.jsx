import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    // console.log('value added' , counter)
  };
  const deleteValue = () => {
    if (counter == 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React practice - Hooks</h1>
      <h3>Counter value :{counter}</h3>

      <button onClick={addValue} style={{margin : '12px' }  }> Add</button>

      <button onClick={deleteValue}> Remove</button>
    </>
  );
}

export default App;
