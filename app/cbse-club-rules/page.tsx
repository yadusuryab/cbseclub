import { NextPage } from "next";

const Rules: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Rules for CBSE Students</h1>

      <p className="mb-6">
        Inspired by <em>Fight Club</em> — but this is <strong>Study Club</strong>.  
        Follow these rules to survive CBSE life 👇
      </p>

      <ol className="list-decimal pl-6 space-y-4">
        <li>
          The first rule of CBSE Club: <strong>Don’t ignore NCERT</strong>.  
          Every question finds its root there.
        </li>
        <li>
          The second rule of CBSE Club: <strong>DON’T ignore NCERT</strong>.  
          (Yes, we had to repeat it.)
        </li>
        <li>
          No endless procrastination.  
          No "I’ll start from tomorrow." Tomorrow never comes.
        </li>
        <li>
          You don’t talk about how “easy” boards are — until you’ve actually written them.
        </li>
        <li>
          If you don’t understand a chapter: <strong>ask, discuss, revise</strong>.  
          Silence is not strength here.
        </li>
        <li>
          Six hours of sleep, minimum. A tired brain = a failing brain.
        </li>
        <li>
          If this is your first time in CBSE Club,  
          <strong>you study hard, and you stay consistent.</strong>
        </li>
      </ol>

      <p className="mt-8 italic text-gray-600 dark:text-gray-400">
        “It’s only after you’ve put in the effort, that you realize how much you can achieve.”  
        – CBSE Club
      </p>
    </div>
  );
};

export default Rules;
