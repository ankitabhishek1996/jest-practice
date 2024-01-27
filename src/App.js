import logo from "./logo.svg";
import "./App.css";
import { TestMessage } from "./sum";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click Me
        </button>
        <p>The counter value is {counter}</p>
        <TestMessage />
      </header>
    </div>
  );
}

export default App;
