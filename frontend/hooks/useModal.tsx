import { useState } from "react";

function useModal() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);

  function open() {
    setShow(true);
    setTop(window.scrollY + 16);
  }
  function close() {
    setShow(false);
  }

  return { show, top, open, close };
}

export default useModal;
