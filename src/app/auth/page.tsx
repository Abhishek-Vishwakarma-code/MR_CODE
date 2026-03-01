"use client";

import React, { useActionState, useEffect, useState } from "react";
import AuthModal from "../Components/Modals/Authmodal";
import Navbar from "../Components/Navbar/Navbar";
import { useAuthModal } from "@/store/useAuthModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

const AuthPage: React.FC = () => {
  const isOpen = useAuthModal((state) => state.isOpen);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/");
    if(!loading && !user) setPageLoading(false);
  }, [user, router,loading]);
  if (pageLoading) return null;
  return (
    <nav>
      <div className="bg-linear-to-b from-gray-600 to-black h-screen relative">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
            {/* <img src="/hero.png" alt="Mr. Code" height={700} width={700} /> */}
         <div className="hero-wrapper">
  <img
    src="/hero.png"
    alt="Mr. Code"
    className="hero-image"
  />
</div>

<style jsx>{`
  .hero-wrapper {
    animation: fadeInUp 1.2s ease forwards;
  }

  .hero-image {
    animation: float 5s ease-in-out infinite;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }
`}</style>
          </div>
          {isOpen && <AuthModal />}
        </div>
      </div>
    </nav>
  );
};

export default AuthPage;
