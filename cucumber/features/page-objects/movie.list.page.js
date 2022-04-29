class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    starRank(name){
        return $(this.parentLocator).$(`.sc-7ab21ed2-1=${name}`);
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink(text) {
        return $(this.parentLocator).$(`.result_text=${text}`);
    }

    movieLink(name, year){
        return $(this.parentLocator).$(`a=${name} (${year})`)
    }

    directorName(name){
        return $(this.parentLocator).$(`a=${name}`)
    }

    actorName(name){
        return $(this.parentLocator).$(`a=${name}`)
    }

    toHome () {
        return browser.url(`https://www.imdb.com`)
    }

}

module.exports = new MovieList;