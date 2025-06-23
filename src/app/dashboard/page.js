"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Head from "next/head";
// Dummy artist submissions data
const ARTISTS = [
  { id: 1, name: "Asha Singh", category: "Singer", city: "Delhi", fee: "₹500" },
  {
    id: 2,
    name: "Rahul Dance Crew",
    category: "Dancer",
    city: "Mumbai",
    fee: "₹800",
  },
  { id: 3, name: "DJ Roxy", category: "DJ", city: "Bangalore", fee: "₹600" },
  {
    id: 4,
    name: "Motivator Meena",
    category: "Speaker",
    city: "Delhi",
    fee: "₹700",
  },
];

// Reusable Table component
function Table({ columns, data, emptyText }) {
  if (!data.length) {
    return <div className="text-gray-500 text-center py-8">{emptyText}</div>;
  }
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-blue-100 bg-white">
      <table className="min-w-full rounded-2xl">
        <thead className="sticky top-0 z-10">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 border-b font-bold text-gray-900 bg-gradient-to-r from-blue-100 to-blue-200 text-left text-base"
              >
                {col.header}
              </th>
            ))}
            <th className="px-6 py-4 border-b font-bold text-gray-900 bg-gradient-to-r from-blue-100 to-blue-200 text-left text-base">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={`transition ${
                idx % 2 === 0 ? "bg-white" : "bg-blue-50"
              } hover:bg-blue-100`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-3 border-b text-gray-800 text-base"
                >
                  {row[col.key]}
                </td>
              ))}
              <td className="px-6 py-3 border-b">
                <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-blue-900 transition text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DashboardPage() {
  const [artists] = useState(ARTISTS);

  // Table columns definition
  const columns = [
    { key: "name", header: "Name" },
    { key: "category", header: "Category" },
    { key: "city", header: "City" },
    { key: "fee", header: "Fee" },
  ];

  return (
    <>
      <Head>
        <title>Manager Dashboard | Artistly</title>
        <meta
          name="description"
          content="View and manage artist submissions on the Artistly Manager Dashboard. See artist names, categories, cities, and fees in a clean table."
        />
        <link rel="canonical" href="https://yourdomain.com/dashboard" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Manager Dashboard | Artistly" />
        <meta
          property="og:description"
          content="View and manage artist submissions on the Artistly Manager Dashboard. See artist names, categories, cities, and fees in a clean table."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/dashboard" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-dashboard.jpg"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manager Dashboard | Artistly" />
        <meta
          name="twitter:description"
          content="View and manage artist submissions on the Artistly Manager Dashboard. See artist names, categories, cities, and fees in a clean table."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-dashboard.jpg"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-0 flex flex-col items-center">
        <Header />
        <h1 className="text-4xl font-extrabold mb-10 mt-10 text-blue-900 text-center tracking-tight drop-shadow">
          Manager Dashboard
        </h1>
        <section className="w-full max-w-4xl rounded-2xl p-0 sm:p-8">
          <Table
            columns={columns}
            data={artists}
            emptyText="No artist submissions yet."
          />
        </section>
      </main>
    </>
  );
}
