const Page = require('./page')

class MovieList extends Page {
  constructor(tableId = 1) {
    super()
    this.parentLocator = `.find-section:nth-of-child(${tableId})`
  }

  starRank(name) {
    return $(this.parentLocator).$(`.sc-7ab21ed2-1=${name}`)
  }

  nameGenre(genre, number) {
    return $(this.parentLocator).$(
      `.a.sc-16ede01-3:nth-child(${number})=${genre}`
    )
  }

  get bottomLink() {
    return $('....')
  }

  rowHyperlink(text) {
    return $(this.parentLocator).$(`.result_text=${text}`)
  }

  movieLink(name, year) {
    return $(this.parentLocator).$(`a=${name} (${year})`)
  }

  directorName(name) {
    return $(this.parentLocator).$(`a=${name}`)
  }

  actorName(name) {
    return $(this.parentLocator).$(`a=${name}`)
  }
}

module.exports = new MovieList()
