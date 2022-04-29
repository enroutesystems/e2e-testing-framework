class MovieAssert {
  constructor() {
    this.parentLocator = ".ipc-page-section";
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
  async compareDirector(name) {
    return $(this.parentLocator).$(`a=${name}`);
  }

  async compareActor(name) {
    return $(this.parentLocator).$(`a=${name}`);
  }

  async compareRanking(ranking) {
    return $(this.parentLocator).$(`span=${ranking}`);
  }

  async compareGenre(genre) {
    return $(this.parentLocator).$(`span=${genre}`);
  }
}

module.exports = new MovieAssert();
