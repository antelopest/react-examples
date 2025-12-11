import { useState } from "react";

export const TogglePage = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const show = () => {
    setVisible(true);
  }

  const hide = () => {
    setVisible(false);
  }



  if (!visible) {
    return (
      <>
        <h3>Toggle</h3>

        <button onClick={show} type="button">Show Address</button>
      </>
    )
  }

  return (
    <>
      <h3>Toggle</h3>

      {!visible && (
        <button onClick={show} type="button">Show</button>
      )}

      {visible && (
        <>
          <button onClick={hide} type="button">Hide</button>
          <div>
            <h3> Address</h3>
            <p>Thailand, Phuket, Chalong</p>
          </div>
        </>
      )}
    </>
  );
}