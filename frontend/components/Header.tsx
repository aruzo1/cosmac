import Image from "next/image";

function Header() {
  return (
    <header className="container py-4">
      <div className="relative h-[20rem]">
        <Image
          src="/images/header.png"
          alt="zdjęcie salonu"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </header>
  );
}

export default Header;
