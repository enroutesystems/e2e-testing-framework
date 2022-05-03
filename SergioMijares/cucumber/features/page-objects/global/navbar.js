const SearchBar = require('../../components/search-bar')

class NavBar {
    /**
     * sub-component declaration
     */
    searchBar = new SearchBar('#suggestion-search-container')

    /**
     * Getters
     */

    get Logo() {
        return $('a[aria-label="Home"]');
    }

    get menu() {
        return $('label[aria-label="Open Navigation]');
    }
}

module.exports = new NavBar();