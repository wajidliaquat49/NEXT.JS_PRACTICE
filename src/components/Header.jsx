"use client";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <div
      className="flex justify-center items-center gap-8 bg-slate-500 text-white font-semibold cursor-pointer"
      style={{ width: "100%", height: "70px" }}
    >
      <Link href={"/blogs"}>
        <h1 className={"hover:border-b-2 hover:border-red-500"}>Blogs</h1>
      </Link>
      <Link href={"/users"}>
        <h1 className="hover:border-b-2 hover:border-red-500">Users</h1>
      </Link>
      <Link href={"/contact"}>
        <h1 className="hover:border-b-2 hover:border-red-500 ">Contact</h1>
      </Link>

      <Link href={"/about"}>
        <h1 className="hover:border-b-2 hover:border-red-500 ">About</h1>
      </Link>

      <Link href={"/dashboard/profile"}>
        <h1 className="hover:border-b-2 hover:border-red-500 ">Dashboard</h1>
      </Link>
    </div>
  );
};

export default Header;
