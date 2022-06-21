import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

function useSearchBar() {
  const Router = useRouter();
  const [term, setTerm] = useState("");

  function termHandler(e: FormEvent<HTMLInputElement>) {
    setTerm(e.currentTarget.value);
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(1)
    Router.push({ pathname: "/search", query: { term } }).then(() => {
      setTerm("");
    });
  }

  return { term, termHandler, submitHandler };
}

export default useSearchBar;
