import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

interface Props {
  selectedOrder: string;
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <button
        id="dropdownHoverButton"
        className="text-white bg-slate-500 hover:bg-slate-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-blue-800 gap-1 transition-all duration-100"
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {`Order by: ${selectedOrder || 'Relevance'}`} <BsFillCaretDownFill />
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
            <li>
              <button
                onClick={() => onSelectOrder("Relevance")}
                className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Relevance
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectOrder("Date Added")}
                className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Date Added
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectOrder("Name")}
                className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Name
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectOrder("Release date")}
                className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Release date
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectOrder("Popularity")}
                className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Popularity
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectOrder("Average rating")}
                className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Average rating
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortSelector;
