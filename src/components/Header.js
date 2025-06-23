import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 bg-white shadow flex justify-between items-center relative z-20">
      <h1 className="text-2xl font-bold text-blue-700">Artistly</h1>
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block h-0.5 w-6 bg-blue-700 mb-1 transition-all ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-blue-700 mb-1 transition-all ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-blue-700 transition-all ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Desktop nav */}
      <nav className="hidden sm:block">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/artists"
              className="font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition"
            >
              Artists
            </Link>
          </li>
          <li>
            <Link
              href="/onboard"
              className="font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition"
            >
              Onboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile nav */}
      {open && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden animate-fade-in">
          <ul className="flex flex-col gap-2 py-4 px-6">
            <li>
              <Link
                href="/"
                className="block font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition py-2"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/artists"
                className="block font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition py-2"
                onClick={() => setOpen(false)}
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                href="/onboard"
                className="block font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition py-2"
                onClick={() => setOpen(false)}
              >
                Onboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="block font-bold text-lg text-gray-900 hover:text-blue-700 hover:underline transition py-2"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
