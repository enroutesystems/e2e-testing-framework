const { Given, When, Then } = require("@wdio/cucumber-framework");

const HomePage = require("../page-objects/home.page");
const MovieInfoPage = require("../page-objects/movie.info.page");
const NavBar = require("../page-objects/global/navbar");
const MovieList = require("../page-objects/movie.list.page");

const pages = {
  home: HomePage,
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(
  /^on the navbar I select category "(All|Titles|TV Episodes)"$/,
  async (category) => await NavBar.searchBar.selectCategory(category)
);

Then(
  /^I should see the category dropdown now matches "(All|Titles|TV Episodes)"$/,
  async (category) => {
    // This is a destructuring asignment
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { categoryDropdown } = NavBar.searchBar;
    await categoryDropdown.waitForDisplayed({
      timeout: 1000,
      timeoutMsg: "The Category dropdown was not displayed",
    });
    const text = await categoryDropdown.getText();
    // Assertions docs: https://jestjs.io/docs/using-matchers
    /**
     * Why does this line doesn't use await?
     * Answer: when selenium is consumed we send a HTTP request to the selenium API
     *         this force the callback to go to the callback stack, forcing us to use async/await
     * https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
     */
    expect(text).toMatch(category);
  }
);

//---------------BATMAN----------------

When(/^on the navbar I search "(The Batman)"$/, async (movie) => {

  const searchInput = NavBar.searchBar.input;
  const searchBtn = NavBar.searchBar.mag;

  await searchInput.setValue(movie);
  await searchBtn.click();

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

Then(/^I should read that the Director is "(Matt Reeves)" & and than "(Robert Pattinson)" is 1 of the actors$/,
async (director, actor) => {
  //validar director
  const movieDirectors = MovieInfoPage.movieDirector;
  const directorObject = movieDirectors.findDirectorName(director);
  const directorName = await directorObject.getText();
  // console.log("------------------------------------------------------")
  // console.log('DIRECTOR OBJECT: ', directorName, " - DIRECTOR PARAM: ", director);
  // await browser.pause(3000);
  expect(directorName).toMatch(director);

  //validar actor
  const MovieActor = MovieInfoPage.MovieActor;
  const ActorObject = MovieActor.findActor(actor);

  const ActorName = await ActorObject.getText();
  expect(ActorName).toMatch(actor);
  // await browser.pause(3000);

  //
});

Then(
    /^I should Validate that the movie genres is "(Action|Crime|Drama)"$/,
    async (genre) => {
      const MovieGenre = MovieInfoPage.MovieGenre;
      const genreObject = MovieGenre.findGenre(genre);

      const genreName = await genreObject.getText();
      expect(genreName).toMatch(genre);
    }
);