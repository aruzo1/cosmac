import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import FacebookIcon from "components/icons/FacebookIcon";
import InstagramIcon from "components/icons/InstagramIcon";

function Footer() {
  return (
    <div className="py-8 bg-black text-white">
      <footer className="flex flex-col gap-y-4 items-center container">
        <img src="/images/logo-white.png" width="140px" />
        <ul className="flex gap-x-4 font-medium">
          <li className="flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2" />
            <span>606 308 338</span>
          </li>
          <li className="flex items-center">
            <MailIcon className="w-4 h-4 mr-2" />
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
              <FacebookIcon className="w-12 h-12 hover:text-gray-200 transition-colors" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/twojememy.pl/"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-12 h-12 hover:text-gray-200 transition-colors" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
