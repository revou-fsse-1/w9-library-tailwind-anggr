// Description: This file contains the JavaScript code for the search functionality

document.addEventListener('DOMContentLoaded', async () => {
   const searchForm = document.getElementById('search-form');
   const searchInput = document.getElementById('search');
   const searchResult = document.getElementById('search-result');

   const getBooksData = async () => {
      let response = await fetch('./data.json');
      let json = await response.json();
      return json['books'];
   };

   const booksData = await getBooksData();

   searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();

      if (query.length === 0) return;

      const results = booksData.filter((book) => book.title.toLowerCase().includes(query));

      searchResult.innerHTML = '';
      searchResult.classList.remove('hidden');

      results.forEach((book) => {
         const bookDiv = document.createElement('div');
         bookDiv.classList.add('my-6');
         bookDiv.innerHTML = `
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 p-4 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-24" src="${book.image}" alt="${book.title}">
            <div class="flex flex-col justify-between p-4 leading-normal text-gray-400">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">${book.title}</h5>
              <b>Author(s): ${book.authors.join(', ')}</b>
              <caption>${book.subjects.join(', ')}</caption>
            </div>
          </a>
        `;
         searchResult.appendChild(bookDiv);
      });
   });
});
