"use client";

import Link from "next/link";
import React from "react";
import { useAuthModal } from "@/store/useAuthModal";

const Navbar: React.FC = () => {
  const openModal = useAuthModal((state) => state.openModal);

  return (
    <nav>
      <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className="flex items-center justify-center h-20">
          <img src="/logo.png" alt="Mr. Code" height={200} width={200} className="mt-10" />
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