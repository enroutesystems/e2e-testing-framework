class MovieList {
  constructor(parentLocator){
      this.parentLocator = `.find.section:nth-of-child(${tableId})`; //traido de css
  }

  movieName(text){
      return $(this.parentLocator).$(`a=${text}`)
  }
}

module.exports = new MovieList();