class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    movieLink(name, year){
        return $(this.parentLocator).$(`a=${name} (${year})`)
    }

    rowHyperlink(text) {
        return $(this.parentLocator).$(`.result_text=${text}`);
    }

}

module.exports = new MovieList;