// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  py-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>
        Made with 💻 by{" "}
        <a
          href="https://github.com/LaisLimaSampaio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
        >
          Laís Lima Sampaio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
