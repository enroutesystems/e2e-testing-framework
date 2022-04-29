 class MovieAssert {
    constructor() {
        this.parentLocator = ".ipc-page-section";
    }

    async compareDirector(name) {
        return $(this.parentLocator).$(`a=${name}`)
    }

    async compareActor(name) {
        return $(this.parentLocator).$(`a=${name}`)
    }

    async compareRanking(ranking) {
        return $(this.parentLocator).$(`span=${ranking}`)
    }

    async compareGenre(genre) {
        return $(this.parentLocator).$(`span=${genre}`)
    }
}

module.exports = new MovieAssert;