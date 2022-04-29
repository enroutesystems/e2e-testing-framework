class MovieDetails {

    constructor() {
        this.parentLocator = `.sc-10602b09-4 .sc-fa02f843-0`;
        this.genreParentLocator = `.sc-16ede01-4.bMBIRz`;
    }

    get director() {
        return $(this.parentLocator).$(`.ipc-metadata-list-item__list-content-item`);
    }

    star(name) {
        return $(`.ipc-metadata-list-item__list-content-item`).$(`//a[text()='${name}']`);
    }

    get score() {
        const parentLocator = '.sc-f6306ea-2'
        return $(parentLocator).$(`.sc-7ab21ed2-1.jGRxWM`);
    }

    genres(genre) {
        return $(this.genreParentLocator).$(`//span[text()='${genre}']`);
    }
}

module.exports = new MovieDetails;