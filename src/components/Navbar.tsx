import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/projects" },
    { name: "Work", href: "/work" },
    { name: "Contact Me", href: "/contact" },
  ];
  return (
    <nav className="flex absolute justify-between w-full gap-20 py-5 px-10">
      <div>
        <h1 className="text-3xl">Faris</h1>
      </div>
      <div className="flex flex-col gap-6 items-end">
        {links.map((item) => (
          <div key={item.href}>
            <Link className="font-medium text-base" href={item.href}> {item.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
