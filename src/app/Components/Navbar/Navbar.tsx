"use client";

import Link from "next/link";
import React from "react";
import { useAuthModal } from "@/store/useAuthModal";

const Navbar: React.FC = () => {
  const openModal = useAuthModal((state) => state.openModal);

  return (
    <nav className="relative z-50 flex items-center justify-between px-4 py-6 sm:px-8 w-full pointer-events-auto">
      
      {/* Brand Logo - Matched to the new Topbar style */}
      <Link href="/" className="flex items-center gap-3 group shrink-0">
        <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[var(--brand-orange)] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
           <span className="text-white font-black text-2xl sm:text-3xl">M</span>
        </div>
        <div>
          <div>
            <span className="text-[var(--brand-orange)] font-bold text-xl sm:text-2xl">Mr.</span>
            <span className="text-[var(--text-primary)] font-semibold text-xl sm:text-2xl ml-1 transition-colors">Code</span>
          </div>
          <p className="text-[var(--text-muted)] text-[10px] sm:text-xs tracking-wider uppercase font-semibold mt-0.5 transition-colors">
            The Art of Problem Solving
          </p>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="flex items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-orange)] px-6 py-2 sm:px-8 sm:py-2.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all duration-300"
          onClick={() => openModal("login")}
        >
          Sign In
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;