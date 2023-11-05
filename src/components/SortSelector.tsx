import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

export interface Order {
  value: string;
  label: string;
}
interface Props {
  selectedOrder: string;
  onSelectSortOrder: (value: string) => void;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const orderLabel = sortOrders.find((order) => order.value === selectedOrder);
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
        Order by: {orderLabel?.label || 'Relevance'} <BsFillCaretDownFill />
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
            {sortOrders.map((order) => (
              <li key={order.value}>
                <button
                  onClick={() => onSelectSortOrder(order.value)}
                  className="flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {order.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortSelector;
