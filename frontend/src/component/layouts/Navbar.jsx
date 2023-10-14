import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className={`lg:px-32 px-5 h-12 relative bg-white shadow-md `}>
      <ul className={`flex h-full font-semibold text-lg gap-3 items-center`}>
        <li className="relative">
          <Link to={"/"}>Food</Link>

          {pathname === "/" && (
            <div className="absolute w-full -bottom-3 bg-primary h-1"></div>
          )}
        </li>
        <li className="relative">
          <Link to={"/transaksi"}>Transaksi</Link>
          {pathname === "/transaksi" && (
            <div className="absolute w-full -bottom-3 bg-primary h-1"></div>
          )}
        </li>
      </ul>
    </nav>
  );
}
