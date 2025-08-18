"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 mt-12 border rounded-3xl mb-3 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-sm">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            cbseclub
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Free NCERT Class 10 solutions & AI-powered study help.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/sitemap.xml" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Legal
          </h3>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/disclaimer" className="hover:underline">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-gray-600 dark:text-gray-400 text-xs">
        © {new Date().getFullYear()} cbseclub – All rights reserved.
      </div>
    </footer>
  );
}
