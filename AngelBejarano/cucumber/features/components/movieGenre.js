class MovieGenre {
  constructor() {
    this.parentLocator = $(".ipc-chip-list.sc-16ede01-4.bMBIRz");
  }

  async findGenre(name) {
    const objectGenre = this.parentLocator.$(`//a[text()='${name}']`);
    return await objectGenre.getText();
  }
}

module.exports = new MovieGenre();
