import { useState } from "preact/hooks";
import "./app.css";
export function App() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(1);

  function handleIncrease() {
    setCounter(counter + amount);
  }

  function handleDecrease() {
    setCounter(counter - amount);
  }

  function handleAmountChange(e: any) {
    const value = e.target.value;

    if (/^\d*$/.test(value) && !isNaN(value)) {
      setAmount(parseInt(value, 10));
    }
  }

  function handleKeyPress(e: any) {
    // Allow only numbers
    const isValidInput = /^\d*$/.test(e.key);
    if (!isValidInput) {
      e.preventDefault();
    }
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <>
      <h1>Counter</h1>
      <main>
        <div>{counter}</div>
        <div>
          <button className="change-btn" onClick={handleIncrease}>
            +
          </button>
          <button className="change-btn" onClick={handleDecrease}>
            -
          </button>
        </div>
        <div>
          <label htmlFor="valueInput">Increment/Decrement by: </label>
          <input
            id="valueInput"
            type="text"
            value={amount}
            onChange={handleAmountChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button onClick={handleReset}>Reset</button>
      </main>
    </>
  );
}
