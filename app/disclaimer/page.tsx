import { NextPage } from "next";

const Disclaimer: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

      <p className="mb-4">Last updated: August 17, 2025</p>

      <p className="mb-4">
        The information provided on <strong>CBSE Club</strong> is for general educational purposes only. We strive to keep the content accurate and up to date, but we make no guarantees about the completeness, reliability, or accuracy of the materials.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Not Affiliated with CBSE</h2>
      <p className="mb-4">
        This website is not an official CBSE website, nor is it affiliated, endorsed, or sponsored by the Central Board of Secondary Education. All study materials are independently created for student learning support.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Educational Purpose Only</h2>
      <p className="mb-4">
        All resources (notes, guides, practice questions) are shared only for educational use. They should not be considered as official exam papers or final answers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">External Links</h2>
      <p className="mb-4">
        Our website may include links to third-party websites or ads (such as Google AdSense). We have no control over the content or practices of these websites and do not accept responsibility for them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">No Liability</h2>
      <p className="mb-4">
        By using this website, you agree that CBSE Club will not be held liable for any losses, damages, or issues arising from the use of our study materials or reliance on the information provided here.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any concerns or questions about this Disclaimer, please contact us at:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email: <a href="mailto:yadusurya666@gmail.com" className="text-blue-600 underline">yadusurya666@gmail.com</a></li>
        <li>Instagram: <a href="https://instagram.com/yadusuryab" className="text-blue-600 underline">@yadusuryab</a></li>
      </ul>
    </div>
  );
};

export default Disclaimer;
