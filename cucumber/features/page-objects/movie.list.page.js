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

  // get bottomLink() {
  //   return $('....')
  // }

  rowHyperlink(text) {
    return $(this.parentLocator).$(`.result_text=${text}`)
  }

  movieLink() {
    return $(`//*[@id="main"]/div/div[2]/table/tbody/tr[1]/td[2]/a`)
  }

  directorName(name) {
    return $(
      `#__next > main > div > section.ipc-page-background.ipc-page-background--base.sc-c7f03a63-0.kUbSjY > section > div:nth-child(4) > section > section > div.sc-10602b09-2.jzJCdt > div.sc-10602b09-10.TKmtG > div.sc-10602b09-4.UqIkb > div.sc-fa02f843-0.fjLeDR > ul > li:nth-child(1) > div > ul > li > a`
    )
  }

  actorName(name) {
    return $(`a=${name}`)
  }
}

module.exports = new MovieList()
