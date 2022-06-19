import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Portal(props: { children: ReactNode; to: string }) {
  const { children, to } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.getElementById(to)!);
}

export default Portal;
