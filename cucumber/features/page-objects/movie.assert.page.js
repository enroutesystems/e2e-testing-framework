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
        const result = await $(this.parentLocator).$(`span=${genre}`)
        return result
    }
}

module.exports = new MovieAssert;