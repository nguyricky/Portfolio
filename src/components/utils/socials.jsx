import React from "react";
import { ArrowUpRight01Icon } from "hugeicons-react";

const Socials = () => {
  const links = [
    { name: "email", href: "mailto:nguyricky@gmail.com" },
    { name: "github", href: "https://github.com/nguyricky" },
    { name: "linkedin", href: "https://www.linkedin.com/in/nguyricky/" },
  ];

  return (
    <footer className="font-sans">
      <h2 className="text-xl font-medium mb-6">connect with me</h2>
      <nav className="mb-8">
        <ul className="flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-[#0a0f15] flex items-center"
              >
                {link.name}
                <ArrowUpRight01Icon className="w-4 h-4 ml-1" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="border-gray-200 mb-6" />
      <div className="flex flex-row justify-between mb-10">
        <p className="text-sm text-[#0a0f15] opacity-60">Experience is the teacher of all things.</p>
        <p className="text-sm text-[#0a0f15] opacity-60">2024</p>
      </div>
    </footer>
  );
};

export default Socials;
