"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Class10Maths from "@/components/seo/seo";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const chapters = [
    { number: 1, name: "Real Numbers" },
    { number: 2, name: "Polynomials" },
    { number: 3, name: "Pair of Linear Equations in Two Variables" },
    { number: 4, name: "Quadratic Equations" },
    { number: 5, name: "Arithmetic Progressions" },
    { number: 6, name: "Triangles" },
    { number: 7, name: "Coordinate Geometry" },
    { number: 8, name: "Introduction to Trigonometry" },
    { number: 9, name: "Some Applications of Trigonometry" },
    { number: 10, name: "Circles" },
    { number: 11, name: "Constructions" },
    { number: 12, name: "Areas Related to Circles" },
    { number: 13, name: "Surface Areas and Volumes" },
    { number: 14, name: "Statistics" },
    { number: 15, name: "Probability" },
  ];
  

  const [searchQuery, setSearchQuery] = useState("");

  // Filter chapters based on search query
  const filteredChapters = chapters.filter((chapter) => {
    const chapterText = `Chapter ${chapter.number} ${chapter.name}`.toLowerCase();
    return chapterText.includes(searchQuery.toLowerCase());
  });
  

  return (
    <main className="px-6 max-w-4xl mx-auto">
      {/* Header */}
      <Header />

      <header className="flex justify-between items-center my-6">
        <h1 className="text-md md:text-3xl italic text-primary font-serif">
          Mathematics
        </h1>
        <p className="sr-only">
          NCERT Class 10 Maths Solutions, Chapter-wise Notes & Explanations
        </p>
      </header>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by chapter number, name or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded-2xl px-4 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Chapter Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {filteredChapters.map((chapter) => (
  <Link
    key={chapter.number}
    href={`/chapter-${chapter.number}-${chapter.name.toLowerCase().replace(/\s+/g, "-")}`}
    className="p-4 rounded-2xl border shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 flex flex-col"
  >
    <div>
      <h2 className="text-lg font-semibold">
        Chapter {chapter.number}: {chapter.name} - NCERT Class 10 Maths Solutions
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-serif italic">
        Free step-by-step answers & AI-powered doubt solving for Chapter {chapter.number} - {chapter.name}.
      </p>
    </div>

    <div className="mt-4 flex justify-end">
      <Button>
        Start AI Study Mode <ArrowRightCircle />
      </Button>
    </div>
  </Link>
))}

      </section>

      <hr className="my-5" />

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Get free and detailed NCERT Solutions for Class 10 Maths (Latest 2025 Edition). Select a chapter below and instantly ask any doubt like
        <em> "Exercise 1.2 Question 3"</em> or request a step-by-step solution using our AI-powered chat interface. Perfect for CBSE Class 10 board exam preparation.
      </p>

      {/* GEO Targeting */}
      <section className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        <h3 className="font-semibold mb-2">
          CBSE Class 10 Maths NCERT Solutions – India (Kerala, Delhi, Maharashtra, Karnataka & More)
        </h3>
        <p>
          Our NCERT Solutions are designed for Class 10 CBSE students across India – including Kerala, Delhi, Maharashtra, Karnataka, Tamil Nadu, and other states. Updated for 2025 CBSE curriculum.
        </p>
      </section>

      <Class10Maths />
      <Footer />
    </main>
  );
}
