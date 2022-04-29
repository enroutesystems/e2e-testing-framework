const { Given, When, Then } = require("@wdio/cucumber-framework");

const HomePage = require("../page-objects/home.page");
const MovieInfo = require("../page-objects/movie.info.page");
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

When(/^on the navbar I search "(\w[\w ]*\w)"$/, async (movie) => {
  await NavBar.searchBar.searchTitle(movie);
});

When(/^In the search page I click on "(\w[\w ]*\w)" Title$/, async (movie) => {
  const { rowHyperlink } = MovieList;
  await rowHyperlink.click();
});

Then(
  /^I should verify that the Validate the IMDB Ranking of Batman is "(8.1)"$/,
  async (rank) => {
    const { rateValue } = MovieInfo;
    const text = await rateValue.getText();
    expect(text).toMatch(rank);
  }
);


Then(/^I should read that the Director is "(\w[\w ]*\w)"$/,
  async (director) => {
    const { MovieDirector } = MovieInfo;
    const directorName = await MovieDirector.findDirectorName(director);
    expect(directorName).toMatch(director);
  }
);

Then(/^I should read that "(\w[\w ]*\w)" is 1 of the actors$/,
  async (actor) => {
    const { MovieActor } = MovieInfo;
    const ActorName = await MovieActor.findActor(actor);
    expect(ActorName).toMatch(actor);
  }
);

Then(
  /^I should Validate that the movie genre is "(Action|Crime|Drama)"$/,
  async (genre) => {
    const { MovieGenre } = MovieInfo;
    const genreObject = MovieGenre.findGenre(genre);
    const genreName = await genreObject.getText();
    expect(genreName).toMatch(genre);
  }
);
