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
          <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
            <img src="/hero.png" alt="Hero img" />
            {/* <Image src="/hero.png" alt="Mr. Code" height={700} width={700}/> */}
          </div>
          {isOpen && <AuthModal />}
        </div>
      </div>
    </nav>
  );
};

export default AuthPage;
