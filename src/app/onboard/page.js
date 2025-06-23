"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "@/components/Header";
import Head from "next/head";

// Dummy options
const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["English", "Hindi", "Punjabi", "Tamil"];
const feeRanges = ["₹0-₹500", "₹501-₹1000", "₹1001-₹2000", "₹2001+"];

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
    },
  });

  const onSubmit = (data) => {
    // Simulate API call
    console.log("Artist submitted:", data);
    reset();
  };

  // Helper for error text
  const ErrorText = ({ children }) => (
    <span className="text-red-600 text-sm font-medium">{children}</span>
  );

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
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-0 flex flex-col items-center">
        <Header />
        <h1 className="text-3xl font-extrabold mb-8 mt-10 text-blue-900 text-center tracking-tight">
          Artist Onboarding Form
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl flex flex-col gap-7 border border-gray-200"
          noValidate
        >
          {/* Name */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Name
            </label>
            <input
              {...register("name")}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              placeholder="Artist Name"
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </div>
          {/* Bio */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Bio
            </label>
            <textarea
              {...register("bio")}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              placeholder="Short artist bio"
              rows={3}
            />
            {errors.bio && <ErrorText>{errors.bio.message}</ErrorText>}
          </div>
          {/* Category (multi-select checkboxes, controlled) */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Category
            </label>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <div className="flex flex-wrap gap-4">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-gray-800 text-base font-medium"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        checked={field.value.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            field.onChange([...field.value, cat]);
                          } else {
                            field.onChange(
                              field.value.filter((v) => v !== cat)
                            );
                          }
                        }}
                        className="accent-blue-700 w-4 h-4"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.category && (
              <ErrorText>{errors.category.message}</ErrorText>
            )}
          </div>
          {/* Languages (multi-select checkboxes, controlled) */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Languages Spoken
            </label>
            <Controller
              control={control}
              name="languages"
              render={({ field }) => (
                <div className="flex flex-wrap gap-4">
                  {languages.map((lang) => (
                    <label
                      key={lang}
                      className="flex items-center gap-2 text-gray-800 text-base font-medium"
                    >
                      <input
                        type="checkbox"
                        value={lang}
                        checked={field.value.includes(lang)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            field.onChange([...field.value, lang]);
                          } else {
                            field.onChange(
                              field.value.filter((v) => v !== lang)
                            );
                          }
                        }}
                        className="accent-blue-700 w-4 h-4"
                      />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.languages && (
              <ErrorText>{errors.languages.message}</ErrorText>
            )}
          </div>
          {/* Fee Range (dropdown) */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Fee Range
            </label>
            <select
              {...register("fee")}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              <option value="">Select fee range</option>
              {feeRanges.map((fee) => (
                <option key={fee} value={fee}>
                  {fee}
                </option>
              ))}
            </select>
            {errors.fee && <ErrorText>{errors.fee.message}</ErrorText>}
          </div>
          {/* Location */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Location
            </label>
            <input
              {...register("location")}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              placeholder="City or region"
            />
            {errors.location && (
              <ErrorText>{errors.location.message}</ErrorText>
            )}
          </div>
          {/* Profile Image (optional) */}
          <div>
            <label className="block font-bold text-gray-900 mb-2 text-base">
              Profile Image (optional)
            </label>
            <input type="file" accept="image/*" className="w-full text-base" />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold shadow hover:from-blue-700 hover:to-blue-900 transition text-lg"
          >
            Submit
          </button>
          {isSubmitSuccessful && (
            <div className="text-green-700 font-semibold text-center mt-2 text-base">
              Artist submitted successfully!
            </div>
          )}
        </form>
      </main>
    </>
  );
}
