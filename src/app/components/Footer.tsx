"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 py-6 text-center text-[#5a5a5a] dark:text-[#e0d6c6] border-t border-[#e0d6c6]">
      <div className="relative group">
        <a
          href="#"
          className="text-sm hover:text-[#333] dark:hover:text-white transition-all duration-300"
        >
          Feito com <span className="text-[#d4a373]">♡</span> por Julia
        </a>

        {/* Easter Egg - aparece no hover */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#d4a373] text-xs whitespace-nowrap">
          ✨ E um pouco de café brasileiro!
        </span>
      </div>
    </footer>
  );
}
