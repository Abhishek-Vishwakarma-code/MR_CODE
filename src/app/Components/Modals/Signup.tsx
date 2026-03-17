"use client";
import React, { useEffect, useState } from "react";
import { useAuthModal } from "@/store/useAuthModal";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const { openModal } = useAuthModal();
  const router = useRouter();
  
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return alert("Please fill all the fields");
    
    try {
      toast.loading("Creating your account...", {
        position: "top-center",
        toastId: "loadingToast",
      });
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      
      const userData = {
        uid: newUser.user.uid,
        email: newUser.user.email,
        displayName: inputs.displayName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        likedProblems: [],
        dislikedProblems: [],
        solvedProblems: [],
        starredProblems: [],
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userData);
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, { position: "top-center" });
    } finally {
      toast.dismiss("loadingToast");
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form className="space-y-5 px-6 sm:px-8 pb-8 pt-2" onSubmit={handleRegister}>
      <h3 className="text-2xl font-bold text-[var(--text-primary)] text-center">
        Join Mr. Code
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-semibold block mb-2 text-[var(--text-secondary)]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChangeInput}
            className="w-full p-3 rounded-xl outline-none bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-all shadow-sm"
            placeholder="name@company.com"
          />
        </div>

        <div>
          <label htmlFor="displayName" className="text-sm font-semibold block mb-2 text-[var(--text-secondary)]">
            Display Name
          </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            required
            onChange={handleChangeInput}
            className="w-full p-3 rounded-xl outline-none bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-all shadow-sm"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-semibold block mb-2 text-[var(--text-secondary)]">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChangeInput}
            className="w-full p-3 rounded-xl outline-none bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--brand-orange)] focus:ring-1 focus:ring-[var(--brand-orange)] transition-all shadow-sm"
            placeholder="********"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-[var(--brand-orange)] text-white font-bold text-base shadow-md shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-70 mt-2"
      >
        {loading ? "Registering..." : "Create Account"}
      </button>

      <div className="text-sm font-medium text-[var(--text-muted)] text-center pt-2">
        Already have an account?{" "}
        <button
          type="button"
          className="text-[var(--brand-orange)] hover:underline font-bold"
          onClick={() => openModal("login")}
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Signup;