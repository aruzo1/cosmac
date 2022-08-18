import Image from "next/future/image";
import useForm from "hooks/useForm";
import logoWhiteImage from "public/images/logo-white.png";

const options = ["Prośba o ofertę", "Inne"];

function Form() {
  const { href, subject, body, subjectHandler, bodyHandler } = useForm();

  return (
    <section className="py-8 bg-brand text-white">
      <form className="flex flex-col items-center gap-y-4 container w-[35rem] max-w-full">
        <Image src={logoWhiteImage} width={200} alt="logo" />
        <h3 className="text-4xl font-bold">Zapytaj o ofertę.</h3>
        <div className="w-full">
          <label className="label" htmlFor="subject">
            Wybierz Temat
          </label>
          <select
            id="subject"
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
          <label className="label" htmlFor="body">
            Wiadomość
          </label>
          <textarea
            id="body"
            className="min-h-[10rem] w-full mt-2 field"
            value={body}
            onChange={bodyHandler}
          />
        </div>
        <a className="btn-white self-start" href={href}>
          Wyślij
        </a>
      </form>
    </section>
  );
}

export default Form;
