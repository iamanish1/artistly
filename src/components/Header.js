import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-4 py-4 bg-white shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">Artistly</h1>
      <nav>
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
    </header>
  );
}
