"use client";
import Sidebar from "./components/Sidebar";
import CartMenu from "./components/CartMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-[1.875rem]">
      <Sidebar />
      <Link href="/">
        <h1 className="text-lg font-bold">
          <span className="text-primary">Null Bug</span> Store
        </h1>
      </Link>
      <CartMenu />
    </nav>
  );
};

export default Navbar;
