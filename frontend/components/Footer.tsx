import Contacts from "components/common/Contacts";
import Socials from "components/common/Socials";

function Footer() {
  return (
    <footer className="py-8 bg-accent text-white">
      <div className="flex flex-col items-center gap-y-4 container">
        <img src="/images/logo-white.png" alt="logo" width="160px" />
        <Contacts />
        <Socials size={32} />
      </div>
    </footer>
  );
}

export default Footer;
