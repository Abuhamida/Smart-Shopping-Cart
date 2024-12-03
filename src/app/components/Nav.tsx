"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-white fixed top-0 w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-400 hover:text-primary"
            >
              <Image src={'/images/logo.jpg'} alt = '' height={56} width={56}></Image>
            </Link>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/predict" className="hover:text-primary">
              Predict
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background">
          <Link
            href="/"
            className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/predict"
            className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Predict
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
