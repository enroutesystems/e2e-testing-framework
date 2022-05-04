const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/movie.list.page');
const MovieDetails = require('../page-objects/movie.details');

const pages = {
  home: HomePage,
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(
  /^on the navbar I select category "(All|Titles|TV Episodes)"$/,
  async (category) => await NavBar.searchBar.selectCategory(category)
);

When(/^on the navbar I search "(The Batman)"$/, async (movie) => {
  // const result =  MovieList.rowHyperlink(movie);
  const searchInput = NavBar.searchBar.input;
  await searchInput.addValue(movie);
  const searchSubmit = NavBar.searchBar.mag;
  await searchSubmit.click();
});

When(/^on the results page select "(The Batman)"$/, async (movie) => {
  const aElement = MovieList.rowHyperlink();
  await aElement.click();
  // await browser.pause(1500); // wait 1.5s before ending step, usefull before coding the next step
});

When(
  /^on the details page I verify the Director as "(Matt Reeves)"$/,
  async (director) => {
    const directorElem = MovieDetails.director;
    const text = await directorElem.getText();
    expect(text).toMatch(director);
  }
);

Then(
  /^on details page I verify the main star as "(Robert Pattinson)"$/,
  async (actor) => {
    const starElem = MovieDetails.star(actor);
    const text = await starElem.getText();
    expect(text).toMatch(actor);
  }
);

Then(/^on details page verify IMBD Score as "(8.1)"$/, async (score) => {
  const scoreElem = MovieDetails.score;
  const text = await scoreElem.getText();
  expect(text).toMatch(score);
});

Then(
  /^on details page verify genres matches "(Action|Crime|Drama)"$/,
  async (genre) => {
    const genreElem = MovieDetails.genres(genre);
    const text = await genreElem.getText();
    expect(text).toMatch(genre);
  }
);

Then(
  /^I should see the category dropdown now matches "(All|Titles|TV Episodes)"$/,
  async (category) => {
    // This is a destructuring asignment
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { categoryDropdown } = NavBar.searchBar;
    await categoryDropdown.waitForDisplayed({
      timeout: 1000,
      timeoutMsg: 'The Category dropdown was not displayed',
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
