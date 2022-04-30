class MovieDirector {

  get repart() {
    return $(".ipc-metadata-list__item.ipc-metadata-list-item--link");
  }

  findDirectorName(name) {
    return this.repart.$(`//a[text()='${name}']`);
  }
}

module.exports = new MovieDirector();
