const SearchBar = require('../../components/search-bar')

class NavBar {
    searchBar = new SearchBar('#suggestion-search-container')
    
    get Logo() {
        return $('a[aria-label="Home"]');
    }

    get menu() {
        return $('label[aria-label="Open Navigation]');
    }
}

module.exports = new NavBar();
