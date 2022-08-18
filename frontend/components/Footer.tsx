import Image from "next/future/image";
import Contacts from "components/common/Contacts";
import Socials from "components/common/Socials";
import logoWhiteImage from "public/images/logo-white.png";

function Footer() {
  return (
    <footer className="py-8 bg-accent text-white">
      <div className="flex flex-col items-center gap-y-4 container">
        <Image src={logoWhiteImage} width={160} alt="logo" />
        <Contacts />
        <Socials size={32} />
      </div>
    </footer>
  );
}

export default Footer;
