class MovieList { 
    constructor() {
        this.parentLocator = `.findSection .findList tr`;
    }

    get rowHyperlink() {
        return $(this.parentLocator).$(`.result_text a`);
    }

    async goToMovie() {
        const anchor = this.rowHyperlink;
        await anchor.waitForClickable({
            timeoutMsg: 5000,
            timeoutMsg: `The table was not clickable`
        });
        await anchor.click();
    }
}

module.exports = new MovieList;