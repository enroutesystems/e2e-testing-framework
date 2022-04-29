class MovieList {

    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink(text) {
        return $(`.result_text`).$(`a`);
        //return $(this.parentLocator).$(`.result_text=${text}`);
    }

    rateValue(value) {
        return $(`.sc-7ab21ed2-1.jGRxWM`);
    }

}

module.exports = new MovieList;
