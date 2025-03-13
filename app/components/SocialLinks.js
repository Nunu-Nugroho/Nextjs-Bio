import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter />, color: "text-blue-500 hover:text-blue-700" },
  { href: "https://github.com", label: "GitHub", icon: <FaGithub />, color: "text-gray-800 dark:text-white hover:text-gray-400" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin />, color: "text-blue-700 hover:text-blue-900" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {links.map(({ href, label, icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 text-lg ${color}`}
        >
          {icon} <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </div>
  );
}
