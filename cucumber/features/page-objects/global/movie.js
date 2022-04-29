class Movie {
  get directorName() {
    return $('[data-testid="title-pc-principal-credit"]:nth-child(1) a');
    // return $("[data-testid=title-pc-principal-credit:nth-child(1)]").$(`a`);
  }
  get starName() {
    return $('[data-testid="title-pc-principal-credit"]:nth-child(3) .ipc-metadata-list-item__list-content-item--link:nth-child(1)');
  }
}

module.exports = new Movie();