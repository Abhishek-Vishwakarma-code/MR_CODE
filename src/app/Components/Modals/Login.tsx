"use client";
import React, { useEffect, useState } from "react";
import { useAuthModal } from "@/store/useAuthModal";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const { openModal } = useAuthModal();
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return alert("Please fill all the fields");
    }
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
  }, [error]);

  return (
    <form className="space-y-6 px-6 sm:px-8 pb-8 pt-2" onSubmit={handleLogin}>
      <h3 className="text-2xl font-bold text-[var(--text-primary)] text-center">
        Welcome Back
      </h3>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold block mb-2 text-[var(--text-secondary)]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl outline-none bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-all shadow-sm"
            placeholder="name@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-semibold block mb-2 text-[var(--text-secondary)]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl outline-none bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-all shadow-sm"
            placeholder="********"
          />
        </div>
      </div>

      <div className="flex w-full justify-end mt-2">
        <button
          type="button"
          className="text-sm font-medium text-[var(--brand-orange)] hover:underline"
          onClick={() => openModal("forgotPassword")}
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-[var(--brand-orange)] text-white font-bold text-base shadow-md shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:active:scale-100"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <div className="text-sm font-medium text-[var(--text-muted)] text-center pt-2">
        Not registered yet?{" "}
        <button
          type="button"
          className="text-[var(--brand-orange)] hover:underline font-bold"
          onClick={() => openModal("register")}
        >
          Create an account
        </button>
      </div>
    </form>
  );
};

export default Login;