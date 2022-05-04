class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    rowHyperlink(text) {
        return $(`.result_text`).$(`a`);
    }
    
    rateValue(value) {
        return $(`.sc-7ab21ed2-1.jGRxWM`);
    }    
}

module.exports = new MovieList;