class MovieDirector {
  // constructor() {
  // this.parentLocator = parentLocator;
  // }

  get repart() {
    return $(".ipc-metadata-list__item.ipc-metadata-list-item--link");
  }

  findDirectorName(name) {
    return this.repart.$(`//a[text()='${name}']`);
  }
}

/**
 * Constructor requires parent locator
 */
module.exports = new MovieDirector();
