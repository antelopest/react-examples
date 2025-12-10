import { useState } from "react"

export const CounterPage = () => {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  }

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return (
    <>
      <h3>App</h3>

      <p>Counter: {count}</p>

      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement} disabled={count <= 0}>Decrement</button>
      <button type="button" onClick={reset}>Reset</button>
    </>
  )
}