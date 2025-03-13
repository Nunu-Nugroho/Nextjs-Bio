import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center">
      <Image
        src="/avatar.jpg"
        alt="Profile Picture"
        width={100}
        height={100}
        className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md mx-auto"
      />

      <h1 className="text-2xl text-gray-300 font-bold mt-4">Nugroho Wahid Febriyanto</h1>
      <p className="text-gray-600 dark:text-gray-300">DevOps Engineer</p>
      <p className="text-gray-500 dark:text-gray-400 mt-4">
        Automating, optimizing, and securing infrastructure to keep systems scalable, reliable, and efficient.
      </p>

      <SocialLinks />

      <a
        href="/cv.pdf"
        download
        className="block bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition-all"
      >
        Download CV
      </a>
    </div>
  );
}
