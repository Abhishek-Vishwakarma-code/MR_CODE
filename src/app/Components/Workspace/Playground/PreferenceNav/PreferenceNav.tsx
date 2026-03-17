"use client";

import React, { useEffect, useState } from "react";
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineSetting,
} from "react-icons/ai";
import { ISettings } from "../Playground";
import SettingsModal from "@/app/Components/Modals/SettingsModal";

type PreferenceNavProps = {
  settings: ISettings;
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "c", label: "C" },
];

const PreferenceNav: React.FC<PreferenceNavProps> = ({
  settings,
  setSettings,
  language,
  setLanguage,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullScreenChange);
  }, []);

  return (
    <div className="flex items-center justify-between bg-[var(--bg-secondary)] border-b border-[var(--border-color)] h-12 w-full px-4 transition-colors duration-300">

      {/* Language Selector Dropdown */}
      <div className="flex items-center">
        <select
          className="bg-[var(--bg-accent)] text-[var(--text-primary)] font-semibold border border-[var(--border-color)] text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[var(--brand-orange)] hover:border-[var(--brand-orange)] transition-colors cursor-pointer shadow-sm outline-none"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-2">

        {/* Settings */}
        <button
          className="preferenceBtn group !p-2 !m-0 !mr-1"
          onClick={() =>
            setSettings((prev: any) => ({
              ...prev,
              settingsModalIsOpen: true,
            }))
          }
          title="Settings"
        >
          <AiOutlineSetting className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--brand-orange)] transition-colors duration-200" />
        </button>

        {/* Fullscreen */}
        <button
          className="preferenceBtn group !p-2 !m-0"
          onClick={handleFullScreen}
          title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullScreen ? (
            <AiOutlineFullscreenExit className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--brand-orange)] transition-colors duration-200" />
          ) : (
            <AiOutlineFullscreen className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--brand-orange)] transition-colors duration-200" />
          )}
        </button>
      </div>

      {/* Settings Modal Component */}
      {settings.settingsModalIsOpen && (
        <SettingsModal settings={settings} setSettings={setSettings} />
      )}
    </div>
  );
};

export default PreferenceNav;