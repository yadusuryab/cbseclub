import { NextPage } from "next";
import { Mail, Instagram } from "lucide-react";

const Contact: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 min-h-[600px] py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4">
        Have questions, suggestions, or just want to connect? 
        Feel free to reach out. We’d love to hear from you!
      </p>

      <div className="space-y-4">
        <a
          href="mailto:yadusurya666@gmail.com"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <Mail className="w-5 h-5" />
          <span>yadusurya666@gmail.com</span>
        </a>

        <a
          href="https://instagram.com/yadusuryab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-pink-600"
        >
          <Instagram className="w-5 h-5" />
          <span>@yadusuryab</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
