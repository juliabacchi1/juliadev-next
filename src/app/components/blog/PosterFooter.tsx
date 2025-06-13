type PostFooterProps = {
  date: string;
};

export function PostFooter({ date }: PostFooterProps) {
  return (
    <div className="pt-10 mt-10 border-t border-gray-200 text-sm text-gray-500">
      <p>
        Por{" "}
        <a
          href="https://juliadev.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-pink-600 hover:underline hover:text-gray-800"
        >
          Julia Bacchi
        </a>
      </p>
      <p>{date}</p>
    </div>
  );
}
