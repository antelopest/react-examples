import { useEffect, useState } from "react";

export const TimerPage = () => {

  const [seconds, setSeconds] = useState<number>(60);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (!active) return;

    const intervalId = setInterval(() => {
      setSeconds(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(intervalId);

  }, [active]);

  const start = () => {
    setActive(true);
  }

  const stop = () => {
    setActive(false);
  }

  const reset = () => {
    setSeconds(60);
  }

  return (
    <>
      <h3>Timer</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={start} type="button">Start</button>
      <button onClick={stop} type="button">Stop</button>
        <button onClick={reset} type="button">Reset</button>
    </>)
}