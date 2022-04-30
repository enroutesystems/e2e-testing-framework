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
}

module.exports = new MovieInfo();
