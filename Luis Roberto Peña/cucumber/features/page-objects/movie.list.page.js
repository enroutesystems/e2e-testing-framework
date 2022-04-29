class MovieList {
  constructor(tableId = 1) {
    this.parentLocator = `.find-section:nth-of-child(${tableId})`;
  }

  get bottomLink() {
    return $("....");
  }

  rowHyperlink(text) {
    return $(`.result_text`).$(`a`);
  }
}

module.exports = new MovieList();
