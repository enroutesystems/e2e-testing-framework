const { Given, When, Then } = require("@wdio/cucumber-framework");

const HomePage = require("../page-objects/home.page");
const MovieInfoPage = require("../page-objects/movie.info.page");
const NavBar = require("../page-objects/global/navbar");
const MovieList = require("../page-objects/movie.list.page");

const pages = {
  home: HomePage
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(
  /^on the navbar I select category "(All|Titles|TV Episodes)"$/,
  async (category) => await NavBar.searchBar.selectCategory(category)
);

Then(
  /^I should see the category dropdown now matches "(All|Titles|TV Episodes)"$/,
  async (category) => {
    const { categoryDropdown } = NavBar.searchBar;
    await categoryDropdown.waitForDisplayed({
      timeout: 1000,
      timeoutMsg: "The Category dropdown was not displayed"
    });
    const text = await categoryDropdown.getText();
    expect(text).toMatch(category);
  }
);

/*---------------BATMAN----------------*/

When(/^on the navbar I search "(The Batman)"$/, async (movie) => {
  //buscar batman y dar click en buscar
  await NavBar.searchBar.searchTitle(movie);
});

When(/^In the search page I click on "(The Batman)" Title$/, async (movie) => {
  const batmanLink = MovieList.rowHyperlink(movie);

  await batmanLink.click();

  await browser.pause(3000);
});

Then(
  /^I should verify that the Validate the IMDB Ranking of Batman is "(8.1)"$/,
  async (rank) => {
    const batmanLink = MovieList.rateValue();
    const text = await batmanLink.getText();
    expect(text).toMatch(rank);
  }
);

Then(
  /^I should read that the Director is "(Matt Reeves)" & and than "(Robert Pattinson)" is 1 of the actors$/,
  async (director, actor) => {
    //validar director
    const movieDirectors = MovieInfoPage.movieDirector;
    const directorObject = movieDirectors.findDirectorName(director);
    const directorName = await directorObject.getText();

    expect(directorName).toMatch(director);

    //validar actor
    const movieActor = MovieInfoPage.MovieActor;
    const actorObject = movieActor.findActor(actor);

    const actorName = await actorObject.getText();
    expect(actorName).toMatch(actor);
  }
);

Then(
  /^I should Validate that the movie genres is "(Action|Crime|Drama)"$/,
  async (genre) => {
    const movieGenre = MovieInfoPage.MovieGenre;
    const genreObject = movieGenre.findGenre(genre);

    const genreName = await genreObject.getText();
    expect(genreName).toMatch(genre);
  }
);
