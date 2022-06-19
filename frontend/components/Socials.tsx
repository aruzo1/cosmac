import FacebookIcon from "components/icons/FacebookIcon";
import InstagramIcon from "components/icons/InstagramIcon";

const socials = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/protopie/" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/twojememy.pl/" },
];

function Socials({ size }: { size: number }) {
  return (
    <ul className="flex gap-x-2">
      {socials.map(({ Icon, href }, i) => (
        <li key={i}>
          <a target="_blank" href={href} rel="noopener noreferrer">
            <Icon
              className="hover:text-gray-200 transition-colors"
              style={{ width: size, height: size }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
