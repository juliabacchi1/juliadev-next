import Image from "next/image";
import Link from "next/link";

interface PostFooterProps {
  date: string;
  author?: string;
  authorLink?: string;
  avatarSrc?: string;
}

export function PostFooter({
  date,
  author = "Julia Bacchi",
  authorLink = "https://juliadev.vercel.app",
  avatarSrc = "/images/avatar.webp",
}: PostFooterProps) {
  return (
    <div className="mt-10 pt-6 border-t text-sm flex items-center space-x-4">
      {avatarSrc && (
        <Image
          src={avatarSrc}
          alt={`Avatar de ${author}`}
          width={80}
          height={80}
          quality={90}
          className="rounded-full object-cover aspect-square w-10 h-10"
        />
      )}
      <div className="flex flex-col">
        <Link
          href={authorLink}
          className="font-semibold text-pink-600 hover:underline hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </Link>
        <span className="text-gray-500 my-1">{date}</span>
      </div>
    </div>
  );
}
