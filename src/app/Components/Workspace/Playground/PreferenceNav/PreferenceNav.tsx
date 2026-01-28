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
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({
  settings,
  setSettings,
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
    <div className="flex items-center justify-between bg-dark-layer-2 h-11 w-full">
      <div className="flex items-center text-white">
        <button className="flex items-center rounded bg-dark-fill-3 px-2 py-1.5 text-xs">
          JavaScript
        </button>
      </div>

      <div className="flex items-center m-2 gap-3">
        {/* Settings */}
        <button
          className="preferenceBtn group"
          onClick={() =>
            setSettings((prev: any) => ({
              ...prev,
              settingsModalIsOpen: true,
            }))
          }
        >
          <AiOutlineSetting className="h-4 w-4 text-dark-gray-6" />
        </button>

        {/* Fullscreen */}
        <button className="preferenceBtn group" onClick={handleFullScreen}>
          {isFullScreen ? (
            <AiOutlineFullscreenExit className="h-4 w-4 text-dark-gray-6" />
          ) : (
            <AiOutlineFullscreen className="h-4 w-4 text-dark-gray-6" />
          )}
        </button>
      </div>

      {settings.settingsModalIsOpen && (
        <SettingsModal settings={settings} setSettings={setSettings} />
      )}
    </div>
  );
};

export default PreferenceNav;
