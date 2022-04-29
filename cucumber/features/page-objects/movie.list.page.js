class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.find-section:nth-of-child(${tableId})`;
    }

    starRank(name){
        return $(this.parentLocator).$(`.sc-7ab21ed2-1=${name}`);
    }

    nameGenre(name, number){
        return $(this.parentLocator).$(`.a.sc-16ede01-3:nth-child(${number})=${name}`);
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