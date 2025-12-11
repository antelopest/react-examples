import { useCallback, useState } from "react";

export const TogglePage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const toggle = useCallback(() => {
    if (disabled) return;

    setDisabled(true);
    setVisible(prev => !prev);

    setTimeout(() => setDisabled(false), 500);
  }, [disabled]);

  return (
    <>
      <h3>Toggle</h3>

      <button disabled={disabled} onClick={toggle} type="button">{visible ? "Hide" : "Show"}</button>

      {visible && (
        <>
          <div>
            <h3> Address</h3>
            <p>Thailand, Phuket, Chalong</p>
          </div>
        </>
      )}
    </>
  );
}