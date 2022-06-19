import { FormEvent, useMemo, useState } from "react";

function useForm() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const href = useMemo(() => {
    return `mailto:biuro@cosm.ac?body=${body}&subject=${subject}`;
  }, [subject, body]);

  function subjectHandler(e: FormEvent<HTMLSelectElement>) {
    setSubject(e.currentTarget.value);
  }
  function bodyHandler(e: FormEvent<HTMLTextAreaElement>) {
    setBody(e.currentTarget.value);
  }

  return { href, subject, body, subjectHandler, bodyHandler };
}

export default useForm;
