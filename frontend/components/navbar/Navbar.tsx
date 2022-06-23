import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import useNavigation from "hooks/useNavigation";
import SearchBar from "components/navbar/SearchBar";
import Navigation from "components/navbar/Navigation";

function Navbar() {
  const navigation = useNavigation();

  return (
    <Disclosure as="nav" className="container py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="logo" width="180px" />
          </a>
        </Link>

        {/* Desktop */}
        <Navigation
          className="hidden lg:flex gap-x-8"
          navigation={navigation}
        />
        <SearchBar className="hidden lg:flex self-stretch" />

        {/* Mobile */}
        <Disclosure.Button className="lg:hidden btn-brand p-2">
          <MenuIcon className="w-6 h-6" />
        </Disclosure.Button>
      </div>
      {/* Mobile */}
      <Disclosure.Panel>
        <SearchBar className="lg:hidden flex mt-4" />
        <Navigation
          className="lg:hidden flex flex-col mt-4 gap-y-4"
          navigation={navigation}
        />
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default Navbar;
