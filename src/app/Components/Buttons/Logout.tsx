import { auth } from "@/firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

const Logout: React.FC = () => {
  const [signOut, loading, error] = useSignOut(auth);
  
  const handleLogout = () => {
    signOut();
  };

  return (
    <button
      className="flex items-center justify-center p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[var(--bg-accent)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleLogout}
      title="Logout"
    >
      <FiLogOut size={18} />
    </button>
  );
};

export default Logout;