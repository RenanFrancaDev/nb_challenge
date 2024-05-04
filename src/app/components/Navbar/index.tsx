"use client";
import Sidebar from "./components/Sidebar";
import CartMenu from "./components/CartMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between border-b-[1px] border-primary bg-black p-[1.875rem]"
      style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
    >
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
