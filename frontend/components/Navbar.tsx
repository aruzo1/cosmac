import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

const navigation = [
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
            <img alt="logo" src="/images/logo.png" width="200px" />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <ul className="md:flex hidden gap-x-8">
          {navigation.map(({ href, name }) => (
            <li key={href}>
              <Link href={href}>
                <a className="link">{name}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <Disclosure.Button className="md:hidden p-2 rounded-lg bg-brand text-white">
          <MenuIcon className="w-6 h-6" />
        </Disclosure.Button>
      </div>

      {/* Mobile Navigation */}
      <Disclosure.Panel
        as="ul"
        className="md:hidden flex flex-col mt-4 gap-y-4"
      >
        {navigation.map(({ href, name }) => (
          <li key={name}>
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
