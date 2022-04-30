class MovieAssert {
    constructor() {
      this.parentLocator = ".ipc-page-section";
      this.scoreParentLocator = ".sc-f6306ea-2";
      this.genreParentLocator = ".ipc-chip-list";
    }

    get trailerDiv() {
      return $(`${this.parentLocator} .hero-media__slate-overlay`);
    }
  
    async clickOnTrailerButton() {
      const trailerDiv = this.trailerDiv;
      await trailerDiv.waitForClickable({
        timeoutMsg: 2000,
        timeoutMsg: "Trailer div was not clickable on the page",
      });
      await trailerDiv.click();
    }

    compareDirector(directorName) {
      return $(this.parentLocator).$(".ipc-metadata-list-item__list-content-item").$(`//a[text()='${directorName}']`);
    }
  
    compareActor(actorName) {
      return $(this.parentLocator).$(`.ipc-metadata-list-item__list-content-item`).$(`//a[text()='${actorName}']`);
    }
  
    compareRanking(ranking) {
      return $(this.scoreParentLocator).$(`.sc-7ab21ed2-1`).$(`//span[text()='${ranking}']`);
    }
  
    compareGenre(genre) {
      return $(this.genreParentLocator).$(`.ipc-chip__text`).$(`//span[text()='${genre}']`);
    }
  }
  
  module.exports = new MovieAssert();
  