"use client";

import Link from "next/link";
import React from "react";
import { useAuthModal } from "@/store/useAuthModal";

const Navbar: React.FC = () => {
  const openModal = useAuthModal((state) => state.openModal);

  return (
    <nav className="realtive z-1000 pointer-events-autoflex items-center justify-between sm:px-12 px-2 md:px-24">
      <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className="flex items-center shrink-0">
  <svg
    viewBox="0 0 650 200"
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-auto"
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <style>
        {`
          .pulse {
            animation: pulse 2s infinite ease-in-out;
          }

          .float {
            animation: float 4s infinite ease-in-out;
          }

          .draw {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: draw 2s ease forwards;
          }

          @keyframes pulse {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0px); }
          }

          @keyframes draw {
            to { stroke-dashoffset: 0; }
          }
        `}
      </style>
    </defs>

    {/* Animated Icon */}
    <g className="float">
      <rect
        x="40"
        y="40"
        width="80"
        height="80"
        rx="12"
        stroke="#FF6A00"
        strokeWidth="4"
        fill="none"
        className="draw"
      />

      <polygon
        points="80,55 105,80 80,105 55,80"
        fill="#FF6A00"
        filter="url(#glow)"
        className="pulse"
      />
    </g>

    {/* Text: Mr. */}
    <text
      x="160"
      y="95"
      fontSize="64"
      fontWeight="700"
      fill="#FF6A00"
      className="pulse"
      fontFamily="Segoe UI, sans-serif"
    >
      Mr.
    </text>

    {/* Text: Code */}
    <text
      x="270"
      y="95"
      fontSize="64"
      fontWeight="600"
      fill="#E5E7EB"
      fontFamily="Segoe UI, sans-serif"
    >
      Code
    </text>

    {/* Tagline */}
    <text
      x="160"
      y="140"
      fontSize="22"
      fill="#9CA3AF"
      fontFamily="Segoe UI, sans-serif"
    >
      The Art of Problem Solving
    </text>
  </svg>
</Link>

        <div className="flex items-center">
          <button
            type="button"
            className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out"
            onClick={() => openModal("login")}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;