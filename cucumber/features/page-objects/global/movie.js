class Movie {
    get directorName() {
      return $('[data-testid="title-pc-principal-credit"]:nth-child(1) a');
    }
    get starName() {
      return $('[data-testid="title-pc-principal-credit"]:nth-child(3) .ipc-metadata-list-item__list-content-item--link:nth-child(1)');
    }

    get rankingMovie() {
      return $('[data-testid="hero-rating-bar__aggregate-rating__score"]:nth-child(1) .sc-7ab21ed2-1:nth-child(1)');
    }
  }
  
  module.exports = new Movie();
