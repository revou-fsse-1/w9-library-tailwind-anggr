import React, { useState, useEffect } from "react";
import data from "../data.json";

const Main = () => {
  const [booksData, setBooksData] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const getBooksData = async () => {
    setBooksData(data["books"]);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) return;

    const searchResults = booksData.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults);
  };

  return (
    <main className="flex-1 overflow-y-auto bg-library-1 bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center py-3 px-4 sm:px-8">
        <div className="container mx-auto my-3 max-w-screen-md px-4 py-8 sm:px-6 lg:px-8 bg-gray-800 rounded-lg">
          <h1 className="text-white text-center mb-4">
            Welcome to Library! Use this search to find books quickly!
          </h1>
          <form onSubmit={handleSearch}>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* Icon code */}
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button>
            </div>
          </form>
        </div>

        <div
          id="search-result"
          className={`container mx-auto my-3 max-w-screen-md sm:px-6 lg:px-8 bg-gray-800 rounded-lg py-4 ${
            results.length === 0 ? "hidden" : ""
          }`}>
          {results.map((book) => (
            <div key={book.id} className="my-6">
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 p-4 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover w-full rounded-lg h-96 md:h-auto md:w-24"
                  src={book.image}
                  alt={book.title}
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-gray-400">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {book.title}
                  </h5>
                  <b>Author(s): {book.authors.join(", ")}</b>
                  <caption>{book.subjects.join(", ")}</caption>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
