import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

const paths = [
  { href: "/", name: "Główna" },
  { href: "/o-nas", name: "O Nas" },
  { href: "/pilniki", name: "Pilniki" },
  { href: "/frezy", name: "Frezy" },
];

function Navbar() {
  return (
    <Disclosure as="nav" className="container py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <img src="images/logo.png" width="200px" />
          </a>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-x-8">
          {paths.map(({ href, name }) => (
            <li key={href}>
              <Link href={href}>
                <a className="link">{name}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <Disclosure.Button className="md:hidden p-2 rounded-lg bg-brand text-white">
          <MenuIcon className="w-6 h-6" />
        </Disclosure.Button>
      </div>
      {/* Mobile */}
      <Disclosure.Panel
        as="ul"
        className="md:hidden flex flex-col mt-4 gap-y-4"
      >
        {paths.map(({ href, name }) => (
          <li key={href}>
            <Link href={href}>
              <a className="link">{name}</a>
            </Link>
          </li>
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default Navbar;
