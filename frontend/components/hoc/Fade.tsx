import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

function Fade(props: { children: ReactNode; show: boolean }) {
  const { children, show } = props;

  return (
    <Transition
      show={show}
      enter="transition-opacity"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}

export default Fade;
