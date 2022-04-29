const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BatmanPage extends Page {
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('title/tt1877830/?ref_=fn_al_tt_1')
  }
}

module.exports = new BatmanPage()
