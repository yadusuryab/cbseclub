import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">About cbseclub</h1>

      <p className="mb-4">
        Welcome to <strong>cbseclub</strong>, your trusted platform for 
        <strong> CBSE learning resources</strong>. 
        We provide <strong>free NCERT textbook solutions</strong>, 
        practice questions, and <strong>AI-powered doubt solving</strong> 
        to help students prepare better for exams.
      </p>

      <p className="mb-4">
        Right now, we are focused on <strong>Class 10 NCERT Solutions</strong> 
        and study support. But this is just the beginning — soon we’ll expand 
        to cover <strong>other CBSE classes</strong>, including Class 9 and 12.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Why Choose cbseclub?
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Complete, step-by-step NCERT Solutions</li>
        <li>AI Study Mode for instant doubt clarification</li>
        <li>Exam-focused guidance and practice</li>
        <li>100% free and easy to access on any device</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Our Mission</h2>
      <p className="mb-4">
        Our mission is simple: <strong>make CBSE exam preparation stress-free</strong> 
        for every student. By combining high-quality NCERT solutions with modern AI tools, 
        cbseclub ensures that learning is easier, smarter, and more effective.
      </p>

      <p className="mt-6">
        🚀 With <strong>cbseclub</strong>, you can learn faster, score better, 
        and stay ahead in your CBSE journey.
      </p>
    </div>
  );
};

export default About;
