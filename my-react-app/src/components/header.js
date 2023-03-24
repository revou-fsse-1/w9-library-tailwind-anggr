import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                id="m-menu-button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>

                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img
                  class="hidden h-8 w-auto lg:block"
                  src="https://assets.website-files.com/61af164800e38c4f53c60b4e/61af164800e38c11efc60b6d_RevoU.svg"
                  alt="RevoU Library"
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    href="index.html"
                    aria-current="page">
                    Library
                  </a>

                  <a
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    href="books.html">
                    Books
                  </a>

                  <a
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    href="information.html">
                    Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="m-menu" class="sm:hidden hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="index.html" aria-current="page">
              Library
            </a>

            <a href="books.html">Books</a>

            <a href="information.html">Information</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
