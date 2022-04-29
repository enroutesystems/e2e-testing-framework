class MovieList {
  

  async selectMovie(name){
    const movieList = $(".findSection")
    await movieList.waitForDisplayed({ 
      timeout: 2500, 
      timeoutMsg: 'The list of movies are not displayed' 
    });
    const link = $(".findSection").$(`a*=${name}`);
    await link.waitForClickable({ 
      timeout: 2500, 
      timeoutMsg: 'The list of movies are not displayed' 
    });
    link.click()
  }
}

module.exports = new MovieList();