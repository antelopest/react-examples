import { useEffect, useState } from "react"

export const WindowPage = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const listenerResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", listenerResize);

    return () => {
      window.removeEventListener("resize", listenerResize);
    }
  }, []);

  return (
    <>
      <h3>Window</h3>

      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>)
}