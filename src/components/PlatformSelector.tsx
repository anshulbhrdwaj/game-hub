import { BsFillCaretDownFill } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: string | undefined;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const [hovered, setHovered] = useState(false);

  if (error) return null;

  return (
    <>
      <button
        id="dropdownHoverButton"
        className="text-white bg-slate-500 hover:bg-slate-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-blue-800 gap-1 transition-all duration-100"
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {selectedPlatform || "Platforms"}{" "}
        <BsFillCaretDownFill />
      </button>

      {/* Dropdown menu */}
      <div
        className="relative " // Add relative positioning
      >
        <div
          id="dropdownHover"
          className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
            !hovered ? "hidden" : ""
          } transition-all duration-200`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ul className={`py-2 text-sm text-gray-700 dark:text-gray-200`}>
            {data?.map((platform) =>
              platform ? (
                <li key={platform.id}>
                  <button
                    onClick={() => onSelectPlatform(platform)}
                    className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {platform.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PlatformSelector;
