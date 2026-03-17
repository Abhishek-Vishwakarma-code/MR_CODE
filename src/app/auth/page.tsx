"use client";

import React, { useEffect, useState } from "react";
import AuthModal from "../Components/Modals/Authmodal";
import Navbar from "../Components/Navbar/Navbar";
import { useAuthModal } from "@/store/useAuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

const AuthPage: React.FC = () => {
  const isOpen = useAuthModal((state) => state.isOpen);
  const [user, loading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      
      {/* Subtle Premium Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[var(--brand-orange)]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Hero Section - MAXIMIZED SIZE */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 w-full pointer-events-none select-none pb-16 sm:pb-0 mt-8 sm:mt-0">
          
          {/* We use max-w-[95%] to let it span almost the entire screen width on desktop */}
          <div className="animate-fade-in-up w-full max-w-[95%] sm:max-w-[85%] lg:max-w-6xl xl:max-w-7xl flex justify-center items-center">
            <img
              src="/hero.png"
              alt="Mr. Code Hero"
              className="animate-float w-full h-auto object-contain drop-shadow-2xl"
              style={{ 
                maxHeight: "85vh", // Allows the image to grow very tall but prevents scrolling
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" 
              }}
            />
          </div>

        </div>
        
        {/* Auth Modal Render */}
        {isOpen && <AuthModal />}
      </div>
    </main>
  );
};

export default AuthPage;