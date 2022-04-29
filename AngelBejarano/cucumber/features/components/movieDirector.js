class MovieDirector {
  constructor() {
    this.parentLocator = $(".ipc-metadata-list__item");
  }

  async findDirectorName(name) {
    const objectDirector = this.parentLocator.$(`//a[text()='${name}']`);
    return await objectDirector.getText();
  }
}

module.exports = new MovieDirector();
