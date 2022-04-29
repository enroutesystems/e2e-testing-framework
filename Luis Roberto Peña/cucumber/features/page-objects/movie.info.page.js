const MovieDirector = require("../components/movieDirector");
const MovieActor = require("../components/movieActor");
const MovieGenre = require("../components/movieGenre");

class MovieInfo {
  get movieDirector() {
    return MovieDirector;
  }

  get MovieActor() {
    return MovieActor;
  }

  get MovieGenre() {
    return MovieGenre;
  }

  get RateValue() {
    return $(`.sc-7ab21ed2-1.jGRxWM`);
  }
}

module.exports = new MovieInfo();
