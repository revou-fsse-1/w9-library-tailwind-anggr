document.addEventListener("DOMContentLoaded", async () => {
  function getPageFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let page = urlParams.get("page");

    return page;
  }

  async function getBooksData() {
    let response = await fetch("data.json");
    let json = await response.json();
    return json["books"];
  }

  async function displayBooksAndPagination() {
    let data = { books: await getBooksData() };
    let currentPage = getPageFromUrl() || 1;
    currentPage = parseInt(currentPage, 10);

    const itemsPerPage = 12;
    const maxPageButtonsToShow = 5;

    function renderBooks() {
      const booksContainer = document.getElementById("books");
      booksContainer.innerHTML = "";

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const booksToDisplay = data.books.slice(startIndex, endIndex);

      booksToDisplay.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add(
          "block",
          "bg-white",
          "border",
          "border-gray-200",
          "rounded-lg",
          "shadow",
          "dark:bg-gray-800",
          "dark:border-gray-700"
        );

        const image = document.createElement("img");
        image.src = book.image;
        image.classList.add("h-72", "mx-auto");

        const title = document.createElement("h2");
        title.textContent = book.title;
        title.classList.add(
          "mb-2",
          "text-2xl",
          "font-bold",
          "tracking-tight",
          "text-gray-900",
          "dark:text-white",
          "text-left",
          "pl-4",
          "pt-4"
        );
        const authors = document.createElement("p");
        authors.textContent = book.authors.join(", ");
        authors.classList.add(
          "mb-3",
          "font-normal",
          "text-gray-700",
          "dark:text-gray-400",
          "text-left",
          "text-left",
          "pl-4"
        );

        const authorPrefix = document.createElement("span");
        authorPrefix.textContent = "Author(s): ";
        authorPrefix.classList.add("font-bold");

        authors.insertBefore(authorPrefix, authors.firstChild);

        card.append(image, title, authors);
        booksContainer.append(card);
      });
    }

    function renderPaginationAt(container) {
      container.innerHTML = "";

      const totalPages = Math.ceil(data.books.length / itemsPerPage);
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxPageButtonsToShow / 2)
      );
      const endPage = Math.min(
        totalPages,
        startPage + maxPageButtonsToShow - 1
      );

      const prevButton = document.createElement("button");
      prevButton.textContent = "Previous";
      prevButton.classList.add(
        "px-3",
        "py-2",
        "ml-0",
        "leading-tight",
        "text-gray-500",
        "bg-white",
        "border",
        "border-gray-300",
        "rounded-l-lg",
        "hover:bg-gray-100",
        "hover:text-gray-700",
        "dark:bg-gray-800",
        "dark:border-gray-700",
        "dark:text-gray-400",
        "dark:hover:bg-gray-700",
        "dark:hover:text-white"
      );

      if (currentPage === 1) {
        prevButton.disabled = true;
      } else {
        prevButton.addEventListener("click", () => {
          currentPage--;
          renderBooks();
          renderPagination();
        });
      }

      container.append(prevButton);

      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");

        pageButton.textContent = i;
        pageButton.classList.add(
          "px-3",
          "py-2",
          "leading-tight",
          "text-gray-500",
          "bg-white",
          "border",
          "border-gray-300",
          "hover:bg-gray-100",
          "hover:text-gray-700",
          "dark:bg-gray-800",
          "dark:border-gray-700",
          "dark:text-gray-400",
          "dark:hover:bg-gray-700",
          "dark:hover:text-white"
        );

        pageButton.addEventListener("click", () => {
          currentPage = i;
          renderBooks();
          renderPagination();
        });

        container.append(pageButton);
      }

      const nextButton = document.createElement("button");
      nextButton.textContent = "Next";
      nextButton.classList.add(
        "px-3",
        "py-2",
        "ml-0",
        "leading-tight",
        "text-gray-500",
        "bg-white",
        "border",
        "border-gray-300",
        "rounded-r-lg",
        "hover:bg-gray-100",
        "hover:text-gray-700",
        "dark:bg-gray-800",
        "dark:border-gray-700",
        "dark:text-gray-400",
        "dark:hover:bg-gray-700",
        "dark:hover:text-white"
      );

      if (currentPage === totalPages) {
        nextButton.disabled = true;
      } else {
        nextButton.addEventListener("click", () => {
          currentPage++;
          renderBooks();
          renderPagination();
        });
      }

      container.append(nextButton);
    }

    function renderPagination() {
      const topPagination = document.getElementById("top-pagination");
      const bottomPagination = document.getElementById("bottom-pagination");
      renderPaginationAt(topPagination);
      renderPaginationAt(bottomPagination);
    }

    renderBooks();
    renderPagination();
  }

  displayBooksAndPagination();
});
