"use client";

import { create } from "zustand";

type AuthModalType = "login" | "register" | "forgotPassword";

interface AuthModalState {
  isOpen: boolean;
  type: AuthModalType;
  openModal: (type: AuthModalType) => void;
  closeModal: () => void;
}

export const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  type: "login",
  openModal: (type) =>
    set({
      isOpen: true,
      type,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      type: "login",
    }),
}));
