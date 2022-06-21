import Link from "next/link";

interface Props {
  className: string;
  navigation: { name: string; href: string }[];
}

function Navigation({ className, navigation }: Props) {
  return (
    <ul className={className}>
      {navigation.map(({ name, href }) => (
        <li key={name}>
          <Link href={href}>
            <a className="link">{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
