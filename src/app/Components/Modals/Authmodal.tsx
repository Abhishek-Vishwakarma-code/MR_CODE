"use client";
import React, { useEffect } from "react";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import { IoClose } from "react-icons/io5";
import { useAuthModal } from "@/store/useAuthModal";

const AuthModal: React.FC = () => {
  const { isOpen, type, closeModal } = useAuthModal();

  if (!isOpen) return null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  return (
    <>
      {/* Overlay with blur effect */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
        <div className="relative w-full max-w-md pointer-events-auto animate-modal-pop">

          {/* Main Modal Body - Replaced old gradient with theme variables */}
          <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] shadow-2xl overflow-hidden transition-colors duration-300">

            {/* Header / Close button */}
            <div className="flex justify-end p-4 pb-0">
              <button
                type="button"
                className="bg-transparent rounded-lg p-2 text-[var(--text-muted)] hover:bg-[var(--bg-accent)] hover:text-[var(--text-primary)] transition-colors"
                onClick={closeModal}
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>

            {/* Auth forms rendering */}
            {type === "login" ? (
              <Login />
            ) : type === "register" ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;