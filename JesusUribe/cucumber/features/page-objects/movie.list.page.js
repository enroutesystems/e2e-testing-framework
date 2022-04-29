class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.findSection:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink() {
        // multiple chained element queries, thanks to Luis Roberto Peña
        return $(`.result_text`).$(`a`);
    }
    
}

module.exports = new MovieList;