const SearchInput = () => {
  return (
    <form className="flex items-center w-[75%] 2xl:w-3/5 h-9" onSubmit={() => console.log()}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border h-8 2xl:h-10 border-gray-300 text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search Game..."
          required
        />
        <button
          type="submit"
          className="p-2.5 ml-2 flex items-center text-sm h-8 2xl:h-10 font-medium text-white bg-slate-700 rounded-full border border-slate-700 hover:bg-slate-800 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700 "
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
