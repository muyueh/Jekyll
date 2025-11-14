(function () {
  if (!window.SimpleJekyllSearch) {
    console.warn('SimpleJekyllSearch is unavailable.');
    return;
  }

  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    noResultsText: '<li>No matches found. Try another cat or dog keyword!</li>',
    searchResultTemplate: '<li><a href="{url}">{title}</a><span class="search-item-meta">{date}</span></li>'
  });
})();
