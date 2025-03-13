import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter />, color: "text-blue-500 hover:text-blue-700" },
    { href: "https://github.com", label: "GitHub", icon: <FaGithub />, color: "text-gray-800 dark:text-white hover:text-black" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin />, color: "text-blue-700 hover:text-blue-900" },
  ];

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex space-x-6">
        {links.map(({ href, label, icon, color }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center ${color}`}>
              {icon} <span className="ml-2">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}