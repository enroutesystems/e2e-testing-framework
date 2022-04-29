class MovieGenre {
    // constructor() {
    // this.parentLocator = parentLocator;
    // }
  
    get genres() {
      return $(".ipc-chip-list.sc-16ede01-4.bMBIRz");
    }
  
    findGenre(name) {
      return this.genres.$(`//a[text()='${name}']`);
    }
  }
  
  /**
   * Constructor requires parent locator
   */
  module.exports = new MovieGenre();
  