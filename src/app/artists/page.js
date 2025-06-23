"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Head from "next/head";

// Dummy artist data
const ARTISTS = [
  {
    id: 1,
    name: "Asha Singh",
    category: "Singer",
    price: 500,
    location: "Delhi",
  },
  {
    id: 2,
    name: "Rahul Dance Crew",
    category: "Dancer",
    price: 800,
    location: "Mumbai",
  },
  { id: 3, name: "DJ Roxy", category: "DJ", price: 600, location: "Bangalore" },
  {
    id: 4,
    name: "Motivator Meena",
    category: "Speaker",
    price: 700,
    location: "Delhi",
  },
  { id: 5, name: "DJ Max", category: "DJ", price: 550, location: "Mumbai" },
  {
    id: 6,
    name: "Sonal Sharma",
    category: "Singer",
    price: 400,
    location: "Bangalore",
  },
];

// Unique filter options
const categories = [...new Set(ARTISTS.map((a) => a.category))];
const locations = [...new Set(ARTISTS.map((a) => a.location))];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹501-₹700", min: 501, max: 700 },
  { label: "Above ₹700", min: 701, max: Infinity },
];

// Reusable Artist Card
function ArtistCard({ artist }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition group">
      <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-900">
        {artist.name}
      </h3>
      <div className="flex items-center gap-2">
        <span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-semibold">
          {artist.category}
        </span>
        <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-semibold">
          {artist.location}
        </span>
      </div>
      <div className="text-lg font-semibold text-gray-800">
        Price: <span className="text-blue-700">₹{artist.price}</span>
      </div>
      <button className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium shadow hover:from-blue-700 hover:to-blue-900 transition">
        Ask for Quote
      </button>
    </div>
  );
}

// Reusable Filter Block
function FilterBlock({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-1 min-w-[140px]">
      <label className="font-semibold text-gray-800">{label}</label>
      <select
        className="border border-gray-300 rounded px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((opt) =>
          typeof opt === "string" ? (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ) : (
            <option key={opt.label} value={opt.label}>
              {opt.label}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default function ArtistsPage() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  // Filtering logic
  const filtered = ARTISTS.filter((a) => {
    const matchCategory = !category || a.category === category;
    const matchLocation = !location || a.location === location;
    const matchPrice =
      !price ||
      (priceRanges.find((r) => r.label === price)?.min <= a.price &&
        a.price <= priceRanges.find((r) => r.label === price)?.max);
    return matchCategory && matchLocation && matchPrice;
  });

  return (
    <>
      <Head>
        <title>Artists Listing | Artistly</title>
        <meta
          name="description"
          content="Browse and filter top performing artists for your event. Find singers, dancers, DJs, and speakers in your city at the best price on Artistly."
        />
        <link rel="canonical" href="https://yourdomain.com/artists" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Artists Listing | Artistly" />
        <meta
          property="og:description"
          content="Browse and filter top performing artists for your event. Find singers, dancers, DJs, and speakers in your city at the best price on Artistly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/artists" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-artists.jpg"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artists Listing | Artistly" />
        <meta
          name="twitter:description"
          content="Browse and filter top performing artists for your event. Find singers, dancers, DJs, and speakers in your city at the best price on Artistly."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-artists.jpg"
        />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <Header />
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Artists</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <FilterBlock
              label="Category"
              options={categories}
              value={category}
              onChange={setCategory}
            />
            <FilterBlock
              label="Location"
              options={locations}
              value={location}
              onChange={setLocation}
            />
            <FilterBlock
              label="Price Range"
              options={priceRanges.map((r) => r.label)}
              value={price}
              onChange={setPrice}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.length > 0 ? (
              filtered.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No artists found matching your criteria.
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
