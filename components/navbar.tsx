"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="
      flex
      justify-end
      items-center
      gap-12
      m-6
      p-5
      text-2xl
      font-semibold
      "
    >
      <Link
        href="/"
        className="py-2 px-4 rounded-md bg-gray-700 outline-white border-none"
      >
        Posts
      </Link>
      <Link
        href="/new"
        className="py-2 px-4 rounded-md bg-gray-700 outline-white border-none"
      >
        Add Posts
      </Link>
    </header>
  );
};

export default Navbar;
