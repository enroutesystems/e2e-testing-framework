const Page = require('./page')

class MovieList extends Page {
  constructor(tableId = 1) {
    super()
    this.parentLocator = `.find-section:nth-of-child(${tableId})`
  }

  starRank() {
    return $(`.sc-7ab21ed2-1.jGRxWM`)
  }

  nameGenre(number) {
    return $(`.sc-16ede01-3:nth-child(${number})`)
  }

  rowHyperlink(text) {
    return $(this.parentLocator).$(`.result_text=${text}`)
  }

  movieLink() {
    return $(`//*[@id="main"]/div/div[2]/table/tbody/tr[1]/td[2]/a`)
  }

  directorName() {
    return $(
      `//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[2]/div[1]/div[3]/ul/li[1]/div/ul/li/a`
    )
  }

  actorName() {
    return $(
      `//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[2]/div[1]/div[3]/ul/li[3]/div/ul/li[1]/a`
    )
  }
}

module.exports = new MovieList()
