const MovieDirector = require("../components/movieDirector");
const MovieActor = require("../components/movieActor");

class MovieInfo {
  get movieDirector() {
    return MovieDirector;
  }

  get MovieActor() {
    return MovieActor;
  }
}

module.exports = new MovieInfo();
