class MovieGenre {

    get genres() {
      return $(".ipc-chip-list.sc-16ede01-4.bMBIRz");
    }
  
    findGenre(name) {
      return this.genres.$(`//a[text()='${name}']`);
    }
  }

  module.exports = new MovieGenre();
  