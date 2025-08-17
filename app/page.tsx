import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Class10Maths from "@/components/seo/seo";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";



export default function Home() {
  const chapters = [
    "Real Numbers",
    "Polynomials",
    "Pair of Linear Equations in Two Variables",
    "Quadratic Equations",
    "Arithmetic Progressions",
    "Triangles",
    "Coordinate Geometry",
    "Introduction to Trigonometry",
    "Some Applications of Trigonometry",
    "Circles",
    "Constructions",
    "Areas Related to Circles",
    "Surface Areas and Volumes",
    "Statistics",
    "Probability",
  ];

  return (
    <main className="px-6 max-w-4xl mx-auto">
      {/* Header */}
      <Header/>
      <header className="flex justify-between items-center my-6">
        <h1 className="text-md md:text-3xl italic text-primary  font-serif">
          Mathematics
        </h1>

        <p className="sr-only">
          NCERT Class 10 Maths Solutions, Chapter-wise Notes & Explanations
        </p>
      </header>

      {/* Intro Text */}

      {/* Chapter Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {chapters.map((chapter, index) => (
          <Link
            key={index}
            href={`/chapter-${index + 1}-${chapter
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="p-4 rounded-2xl border shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 flex flex-col"
          >
            <div>
              <h2 className="text-lg font-semibold">
                Chapter {index + 1}: {chapter} - NCERT Class 10 Maths Solutions
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-serif italic">
                Free step-by-step answers & AI-powered doubt solving for Chapter{" "}
                {index + 1} - {chapter}.
              </p>
            </div>

            <div className="mt-auto flex justify-end">
              <Button>
                Start AI Study Mode <ArrowRightCircle className="ml-2" />
              </Button>
            </div>
          </Link>
        ))}
      </section>

      <hr className="my-5" />

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Get free and detailed NCERT Solutions for Class 10 Maths (Latest 2025
        Edition). Select a chapter below and instantly ask any doubt like
        <em> "Exercise 1.2 Question 3"</em> or request a step-by-step solution
        using our AI-powered chat interface. Perfect for CBSE Class 10 board
        exam preparation.
      </p>

      {/* GEO Targeting */}
      <section className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        <h3 className="font-semibold mb-2">
          CBSE Class 10 Maths NCERT Solutions – India (Kerala, Delhi,
          Maharashtra, Karnataka & More)
        </h3>
        <p>
          Our NCERT Solutions are designed for Class 10 CBSE students across
          India – including Kerala, Delhi, Maharashtra, Karnataka, Tamil Nadu,
          and other states. Updated for 2025 CBSE curriculum.
        </p>
      </section>
   
     <Class10Maths/>
     <Footer/>
    </main>
  );
}
