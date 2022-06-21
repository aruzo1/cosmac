import Contacts from "components/common/Contacts";
import Socials from "components/common/Socials";

function Bar() {
  return (
    <div className="py-2 bg-brand">
      <div className="flex justify-between gap-4 container text-white">
        <Contacts />
        <Socials size={20} />
      </div>
    </div>
  );
}

export default Bar;
