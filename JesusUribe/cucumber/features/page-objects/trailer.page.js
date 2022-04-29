class TrailerPage {

    constructor() {
        this.videoLocator = `.jw-video`;
    }

    get video() {
        return $(this.videoLocator);
    }
}

module.exports = new TrailerPage;