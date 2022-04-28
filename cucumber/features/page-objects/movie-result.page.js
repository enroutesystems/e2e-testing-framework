const Page = require('./page')

class MovieResultPage extends Page {
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('')
  }
}

module.exports = new HomePage()
