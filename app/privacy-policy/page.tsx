import { NextPage } from "next";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Last updated: August 17, 2025</p>

      <p className="mb-4">
        At <strong>CBSE Club</strong>, accessible from our website, your privacy is one of our top priorities. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Personal information you provide (e.g., email if you contact us).</li>
        <li>Non-personal data such as browser type, device, and pages visited.</li>
        <li>Cookies to improve user experience and show personalized ads.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide and improve our services.</li>
        <li>To respond to your messages or queries.</li>
        <li>To display personalized advertisements via Google AdSense.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We use Google AdSense to display ads. Google may use cookies (including the DoubleClick DART cookie) to serve ads based on your interests and browsing history. You can opt out of personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Ads Settings
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You can disable cookies through your browser settings. However, some parts of our website may not function properly without cookies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, you can contact us at:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email: <a href="mailto:yadusurya666@gmail.com" className="text-blue-600 underline">yadusurya666@gmail.com</a></li>
        <li>Instagram: <a href="https://instagram.com/yadusuryab" className="text-blue-600 underline">@yadusuryab</a></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
