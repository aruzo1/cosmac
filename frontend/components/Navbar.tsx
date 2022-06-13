import Link from "next/link";

const navigation = [
  { href: "/", name: "Główna" },
  { href: "/o-nas", name: "O Nas" },
  { href: "/pilniki", name: "Pilniki" },
  { href: "/frezy", name: "Frezy" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between container py-4">
      <Link href="/">
        <a>
          <img src="images/logo.png" width="200px" />
        </a>
      </Link>
      <ul className="flex gap-x-4">
        {navigation.map(({ href, name }) => (
          <li key={href}>
            <Link href={href}>
              <a className="link">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
