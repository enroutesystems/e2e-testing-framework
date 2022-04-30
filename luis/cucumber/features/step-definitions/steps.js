const { Given, When, Then } = require("@wdio/cucumber-framework");

const HomePage = require("../page-objects/home.page");
const NavBar = require("../page-objects/global/navbar");
const MovieList = require("../page-objects/movie.list.page");
const MovieAssert = require("../page-objects/movie.assert.page");
const MovieTrailer = require("../page-objects/movie.trailer");

const pages = {
  home: HomePage,
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(
  /^on the navbar I search movie "(The Batman)"$/,
  async (movie) => await NavBar.searchBar.searchMovie(movie)
);

Then(/^I select the movie$/, async () => await MovieList.goToMovie());

Then(/^check if the director is "(Matt Reeves)"$/, async (name) => {
  const directorName = await MovieAssert.compareDirector(name).getText();
	expect(directorName).toMatch(name);
});

Then(/^check if the actor is "(Robert Pattinson)"$/, async (name) => {
  const actorName = await MovieAssert.compareActor(name).getText();
  expect(actorName).toMatch(name);
});

Then(/^check if the movie has "([^"]*)" stars$/, async (ranking) => {
  const rankingText = await MovieAssert.compareRanking(ranking).getText();
  expect(rankingText).toMatch(ranking);
});

Then(/^check if the movie has the genre of "(Acción)"$/, async (genre) => {
  const genreText = await MovieAssert.compareGenre(genre).getText();
  expect(genreText).toMatch(genre);
});

Then(/^check if the movie has the genre of "(Crimen)"$/, async (genre) => {
  const genreText = await MovieAssert.compareGenre(genre).getText();
  expect(genreText).toMatch(genre);
});

Then(/^check if the movie has the genre of "(Drama)"$/, async (genre) => {
  const genreText = await MovieAssert.compareGenre(genre).getText();
  expect(genreText).toMatch(genre);
});

Then(
  /^I play trailer in a new page$/,
  async () => await MovieAssert.clickOnTrailerButton()
);
Then(
  /^I click play on trailer button$/,
  async () => await MovieTrailer.clickPlayer()
);

Then(/^The trailer is playing$/, async () => {
  expect(await MovieTrailer.checkPlayer()).toMatch("playing");
  await MovieTrailer.clickPlayer();
  expect(await MovieTrailer.checkPlayer()).toMatch("paused");
});
/* When(/^on the navbar I select category "(Todo|Títulos|Episodios de TV)"$/, 
    async (category) => await NavBar.searchBar.selectCategory(category)); */

Then(
  /^I should see the category dropdown now matches "(Todo|Títulos|Episodios de TV)"$/,
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
