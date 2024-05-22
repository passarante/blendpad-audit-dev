import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed shadow-md text-white h-16 w-full bg-black flex items-center p-4 justify-center space-x-8">
      <Link
        className="hover:opacity-50 duration-500 transition-all ease-in-out"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:opacity-50 duration-500 transition-all ease-in-out"
        href="/audit"
      >
        Kyc/Audit
      </Link>
      <Link
        className="hover:opacity-50 duration-500 transition-all ease-in-out"
        href="#"
      >
        Websites
      </Link>
      <Link
        className="hover:opacity-50 duration-500 transition-all ease-in-out"
        href="#"
      >
        Other Services
      </Link>
    </div>
  );
}
