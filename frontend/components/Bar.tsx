import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import FacebookIcon from "components/icons/FacebookIcon";
import InstagramIcon from "components/icons/InstagramIcon";

function Bar() {
  return (
    <div className="py-2 bg-brand">
      <div className="flex justify-between container text-white text-sm">
        <ul className="flex gap-x-4 font-medium">
          <li className="flex items-center gap-x-2">
            <PhoneIcon className="w-4 h-4" />
            <span>606 308 338</span>
          </li>
          <li className="flex items-center gap-x-2">
            <MailIcon className="w-4 h-4" />
            <span>biuro@cosm.ac</span>
          </li>
        </ul>
        <ul className="flex items-center gap-x-2">
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/protopie/"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="w-5 h-5 hover:text-gray-200 transition-colors" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/twojememy.pl/"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-5 h-5 hover:text-gray-200 transition-colors" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bar;
