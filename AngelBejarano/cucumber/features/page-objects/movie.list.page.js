class MovieList {

    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    get rowHyperlink() {
        return $(`.result_text`).$(`a`);
    }

    rateValue() {
        return $(`.sc-7ab21ed2-1.jGRxWM`);
    }
}

module.exports = new MovieList;
