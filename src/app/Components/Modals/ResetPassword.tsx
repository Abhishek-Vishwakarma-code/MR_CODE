"use client";
import React, { useEffect, useState } from "react";
import { useAuthModal } from "@/store/useAuthModal";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";

const ResetPassword: React.FC = () => {
  const { openModal } = useAuthModal();
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleReset = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast.success("Password reset email sent", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <form className="space-y-6 px-6 sm:px-8 pb-8 pt-2" onSubmit={handleReset}>
      <h3 className="text-2xl font-bold text-[var(--text-primary)] text-center">
        Reset Password
      </h3>

      <p className="text-sm text-[var(--text-secondary)] text-center px-2">
        Forgotten your password? Enter your email address below, and we'll send you a link to reset it.
      </p>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-semibold block mb-2 text-[var(--text-secondary)]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="w-full p-3 rounded-xl outline-none bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-all shadow-sm"
          placeholder="name@company.com"
          required
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full py-3 rounded-xl bg-[var(--brand-orange)] text-white font-bold text-base shadow-md shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-70 mt-2"
      >
        {sending ? "Sending..." : "Reset Password"}
      </button>

      <div className="text-sm font-medium text-[var(--text-muted)] text-center pt-2">
        Remembered your password?{" "}
        <button
          type="button"
          className="text-[var(--brand-orange)] hover:underline font-bold"
          onClick={() => openModal("login")}
        >
          Back to Login
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;