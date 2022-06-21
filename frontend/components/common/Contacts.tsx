import { PhoneIcon, MailIcon } from "@heroicons/react/solid";

const contacts = [
  { Icon: PhoneIcon, text: "606 308 338" },
  { Icon: MailIcon, text: "biuro@cosm.ac" },
];

function Contacts() {
  return (
    <ul className="flex flex-wrap gap-4 font-medium">
      {contacts.map(({ Icon, text }, i) => (
        <li key={i} className="flex items-center">
          <Icon className="w-4 h-4" />
          <span className="ml-2 text-sm">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
