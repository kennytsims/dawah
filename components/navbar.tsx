import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex flex-col  gap-4 items-center justify-center  border-b-2 border-green-500 text-2xl h-20 bg-white">
      <ul className="flex gap-4 flex-center justify-center  b w-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/programs">Programs</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
}
