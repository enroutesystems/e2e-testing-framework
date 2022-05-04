class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.findSection:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink() {
        return $(`.result_text`).$(`a`);
    }
    
}

module.exports = new MovieList;