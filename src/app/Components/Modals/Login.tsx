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
useEffect(()=>{
  if(error) toast.error(error.message, {
    position: "top-center",
    autoClose: 3000,
    theme: "dark",
  });
},[error]);

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleLogin}>
      <h3 className="text-xl font-medium text-white">Sign in to Mr. Code</h3>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          className="border-2 outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
          className="border-2 outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        { loading ? "Loading..." : "Log In"}
      </button>

      <div className="flex w-full justify-end mt-2">
        <a
          href="#"
          className="text-sm text-brand-orange hover:underline"
          onClick={(e) => {
            e.preventDefault();
            openModal("forgotPassword");
          }}
        >
          Forgot Password?
        </a>
      </div>

      <div className="text-sm font-medium text-gray-500">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            openModal("register");
          }}
        >
          Create account
        </a>
      </div>
    </form>
  );
};

export default Login;
