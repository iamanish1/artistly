import Link from "next/link";
import Header from "@/components/Header";
// Dummy categories data with descriptions
const categories = [
  { name: "Singers", icon: "🎤", desc: "Vocal performers for all occasions." },
  { name: "Dancers", icon: "💃", desc: "Energetic dance acts and troupes." },
  { name: "Speakers", icon: "🎙️", desc: "Motivational and keynote speakers." },
  { name: "DJs", icon: "🎧", desc: "Professional DJs for parties & events." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}  
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-blue-100 to-white">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">
          Book Top Performing Artists for Your Event
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Artistly.com connects event planners with talented artists. Browse,
          shortlist, and book the perfect performer for your next event.
        </p>
        <Link
          href="/artists"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Explore Artists
        </Link>
      </section>

      {/* Categories */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Explore by Category
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/artists?category=${encodeURIComponent(cat.name)}`}
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-xl transition group border border-gray-100 hover:border-blue-300 cursor-pointer"
              aria-label={cat.name}
            >
              <span
                className="text-4xl mb-3 rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition p-4"
                aria-hidden="true"
              >
                {cat.icon}
              </span>
              <span className="text-lg font-semibold text-gray-800 mb-1">
                {cat.name}
              </span>
              <span className="text-sm text-gray-500 text-center">
                {cat.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
