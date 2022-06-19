import useForm from "hooks/useForm";

const options = ["Prośba o ofertę", "Inne"];

function Form() {
  const { href, subject, body, subjectHandler, bodyHandler } = useForm();

  return (
    <div className="py-8 bg-brand text-white">
      <form className="flex flex-col items-center gap-y-4 container w-[35rem] max-w-full">
        <img src="/images/logo-white.png" width="200px" />
        <h3 className="text-4xl font-bold">Zapytaj o ofertę.</h3>
        <div className="w-full">
          <label className="label">Wybierz Temat</label>
          <select
            className="w-full mt-2 field"
            value={subject}
            onChange={subjectHandler}
          >
            <option value="" disabled hidden>
              Wybierz temat wiadomości
            </option>
            {options.map((option) => (
              <option key={option} className="text-accent" value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="label">Wiadomość</label>
          <textarea
            className="min-h-[10rem] w-full mt-2 field"
            value={body}
            onChange={bodyHandler}
          />
        </div>
        <a className="btn-white self-start" href={href}>
          Wyślij
        </a>
      </form>
    </div>
  );
}

export default Form;
