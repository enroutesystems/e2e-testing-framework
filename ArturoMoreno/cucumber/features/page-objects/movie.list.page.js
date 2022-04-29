class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink(text) {
        return $(this.parentLocator).$(`.result_text=${text}`);
    }
}

module.exports = new MovieList;