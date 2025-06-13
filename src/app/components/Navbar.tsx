"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Trabalhos", href: "#trabalhos" },
    { label: "Contato", href: "#contato" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Texto */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            unoptimized
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -20 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-semibold text-gray-800 origin-left hidden sm:inline-block"
          >
            Portfolio Julia Bacchi
          </motion.span>
        </ScrollLink>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu desktop */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href.replace("#", "")}
              href={item.href}
              smooth={true}
              duration={500}
              spy={true}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden px-4 pb-4 pt-2"
          >
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <ScrollLink
                    to={item.href.replace("#", "")}
                    href={item.href}
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="block py-2 text-gray-700 hover:text-orange-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
