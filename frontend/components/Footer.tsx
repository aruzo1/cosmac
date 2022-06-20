import Contacts from "components/Contacts";
import Socials from "components/Socials";

function Footer() {
  return (
    <div className="py-8 bg-accent text-white">
      <footer className="flex flex-col items-center gap-y-4 container">
        <img src="/images/logo-white.png" alt="logo" width="160px" />
        <Contacts />
        <Socials size={32} />
      </footer>
    </div>
  );
}

export default Footer;
