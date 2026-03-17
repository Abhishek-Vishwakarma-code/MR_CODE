"use client";

import { BsCheckLg, BsChevronDown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { ISettings } from "../Workspace/Playground/Playground";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useState, useEffect, useRef } from "react";

const EDITOR_FONT_SIZES = ["12px", "13px", "14px", "15px", "16px", "17px", "18px"];
const TAB_SIZES = ["2 spaces", "4 spaces", "8 spaces"];

interface SettingsModalProps {
  settings: ISettings;
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ setSettings, settings }) => {
  const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");
  const [tabSize, setTabSize] = useLocalStorage("lcc-tabSize", "4 spaces");
  const [wordWrap, setWordWrap] = useLocalStorage("lcc-wordWrap", "On");

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setSettings({ ...settings, settingsModalIsOpen: false });
  };

  const toggleDropdown = (dropdownName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* MODAL CONTAINER:
        Changed from max-w-lg to max-w-2xl (wider).
        Removed overflow constraints so dropdowns can pop out freely.
      */}
      <div
        className="relative w-full max-w-2xl bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] shadow-2xl animate-modal-pop"
        ref={modalRef}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] px-6 sm:px-8 py-4 sm:py-5">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            Editor Settings
          </h2>
          <button
            className="rounded-lg p-2 text-[var(--text-muted)] hover:bg-[var(--bg-accent)] hover:text-[var(--text-primary)] transition-colors"
            onClick={handleClose}
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Settings List - Removed overflow-y-auto to stop scrollbar glitch */}
        <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-8 pb-12">
          
          {/* Setting 1: Font Size */}
          <div className="flex justify-between items-start sm:items-center gap-4">
            <div className="pr-4 flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">Font Size</h3>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Choose your preferred font size for the code editor.
              </p>
            </div>
            <div className="relative w-40 shrink-0">
              <button
                onClick={(e) => toggleDropdown("font", e)}
                className="flex w-full items-center justify-between rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--brand-orange)] focus:outline-none transition-colors"
              >
                {fontSize}
                <BsChevronDown className={`transition-transform ${openDropdown === "font" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "font" && (
                <ul className="absolute right-0 mt-2 w-full max-h-48 overflow-y-auto rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl z-50 p-1 custom-scrollbar">
                  {EDITOR_FONT_SIZES.map((size, idx) => (
                    <SettingsListItem
                      key={idx}
                      value={size}
                      selectedOption={settings.fontSize || fontSize}
                      handleSelect={(val) => {
                        setFontSize(val);
                        setSettings({ ...settings, fontSize: val });
                        setOpenDropdown(null);
                      }}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Setting 2: Tab Size */}
          <div className="flex justify-between items-start sm:items-center gap-4">
            <div className="pr-4 flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">Tab Size</h3>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Choose the indentation width for your code.
              </p>
            </div>
            <div className="relative w-40 shrink-0">
              <button
                onClick={(e) => toggleDropdown("tab", e)}
                className="flex w-full items-center justify-between rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--brand-orange)] focus:outline-none transition-colors"
              >
                {tabSize}
                <BsChevronDown className={`transition-transform ${openDropdown === "tab" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "tab" && (
                <ul className="absolute right-0 mt-2 w-full rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl z-50 p-1">
                  {TAB_SIZES.map((size, idx) => (
                    <SettingsListItem
                      key={idx}
                      value={size}
                      selectedOption={tabSize}
                      handleSelect={(val) => {
                        setTabSize(val);
                        setOpenDropdown(null);
                      }}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Setting 3: Word Wrap */}
          <div className="flex justify-between items-start sm:items-center gap-4">
            <div className="pr-4 flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">Word Wrap</h3>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Wrap long lines of code to the next line.
              </p>
            </div>
            <div className="relative w-40 shrink-0">
              <button
                onClick={(e) => toggleDropdown("wrap", e)}
                className="flex w-full items-center justify-between rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--brand-orange)] focus:outline-none transition-colors"
              >
                {wordWrap}
                <BsChevronDown className={`transition-transform ${openDropdown === "wrap" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "wrap" && (
                <ul className="absolute right-0 mt-2 w-full rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl z-50 p-1">
                  {["On", "Off"].map((val, idx) => (
                    <SettingsListItem
                      key={idx}
                      value={val}
                      selectedOption={wordWrap}
                      handleSelect={(selectedVal) => {
                        setWordWrap(selectedVal);
                        setOpenDropdown(null);
                      }}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

/* ==============================================
   Reusable List Item Component
   ============================================== */
interface SettingsListItemProps {
  value: string;
  selectedOption: string;
  handleSelect: (value: string) => void;
}

const SettingsListItem: React.FC<SettingsListItemProps> = ({
  value,
  selectedOption,
  handleSelect,
}) => {
  return (
    <li
      className="relative flex items-center justify-between cursor-pointer px-4 py-2.5 rounded-lg text-sm text-[var(--text-primary)] hover:bg-[var(--bg-accent)] transition-colors"
      onClick={() => handleSelect(value)}
    >
      <span className={selectedOption === value ? "font-bold" : "font-medium"}>
        {value}
      </span>
      {selectedOption === value && (
        <BsCheckLg className="text-[var(--brand-orange)]" size={16} />
      )}
    </li>
  );
};