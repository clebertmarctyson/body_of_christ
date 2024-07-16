"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const menu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col sm:flex-row gap-6 justify-between items-center py-6 px-8">
      <Link
        href={"/"}
        className="uppercase text-md font-bold border-2 border-gray-500 w-fit px-4 py-1 rounded-md"
      >
        Body Of Christ
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {menu.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className={`${
                  pathname === item.link ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
