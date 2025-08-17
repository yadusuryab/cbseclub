import { NextPage } from "next";

const TermsAndConditions: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">Last updated: August 17, 2025</p>

      <p className="mb-4">
        Welcome to <strong>CBSE Club</strong>. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Our Website</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>You must use this website only for lawful purposes.</li>
        <li>You may not copy, reproduce, or distribute our content without permission.</li>
        <li>Any misuse of our website may result in termination of access.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Content</h2>
      <p className="mb-4">
        All notes, study materials, and resources provided on this site are for educational purposes only. While we try to ensure accuracy, we do not guarantee that all information is free from errors or omissions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites or ads (via Google AdSense). We are not responsible for the content or privacy practices of these external websites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h2>
      <p className="mb-4">
        We are not affiliated with CBSE or any official board. All resources are created independently for student learning support. Use of this site is at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        CBSE Club will not be held responsible for any losses, damages, or issues arising from the use of our website, resources, or advertisements.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms and Conditions at any time. Continued use of the website means you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about these Terms, you can reach us at:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email: <a href="mailto:yadusurya666@gmail.com" className="text-blue-600 underline">yadusurya666@gmail.com</a></li>
        <li>Instagram: <a href="https://instagram.com/yadusuryab" className="text-blue-600 underline">@yadusuryab</a></li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
