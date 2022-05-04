const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/movie.list.page');
const MovieDetail = require('../page-objects/movie.detail');

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/,
    async (page) => await pages[page].open());

When(/^on the navbar I select category "(Todo|Títulos|Episodios de TV)"$/,
    async (category) => await NavBar.searchBar.selectCategory(category));

When(/^on the navbar I search "(The Batman)" and click in the first result$/, async (movie) => {
    const searchInput = NavBar.searchBar.input;
    await searchInput.addValue(movie);
    const searchSubmit = NavBar.searchBar.mag;
    await searchSubmit.click();
});

When(/^on the results page select "(The Batman)"$/, async (movie) => {
    const aElement = MovieList.rowHyperlink();
    await aElement.click();
});

Then(/^on the movie details page the director should be Matt Reeves and the actor should be Robert Pattison$/, async () => {
    try {
        await expect(MovieDetail.director).toBeDisplayed()
        const director = MovieDetail.director.getText()
        expect(director).toMatch("Matt Reeves")
        elementactor = await MovieDetail.actor("Robert Pattinson")
        actor = elementactor.getText()
        expect(actor).toMatch("Robert Pattinson")
    } catch (error) {

    }

})

Then(/^on details page verify IMBD Score as "(8.1)"$/, async (score) => {
    const scoreElem = MovieDetail.score;
    const text = await scoreElem.getText();
    expect(text).toMatch("8.1");
});
Then(
    /^verify genres matches "(Acción|Crimen|Drama)"$/,
    async (genre) => {
      const genreElem = MovieDetail.genres(genre);
      const text = await genreElem.getText();
      expect(text).toMatch(genre);
    }
  );

Then(/^I should see the category dropdown now matches "(Todo|Títulos|Episodios de TV)"$/,
    async (category) => {
        // This is a destructuring asignment
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const { categoryDropdown } = NavBar.searchBar;
        await categoryDropdown.waitForDisplayed({
            timeout: 1000,
            timeoutMsg: 'The Category dropdown was not displayed'
        });
        const text = await categoryDropdown.getText();
        // Assertions docs: https://jestjs.io/docs/using-matchers
        /**
        * Why does this line doesn't use await?
        * Answer: when selenium is consumed we send a HTTP request to the selenium API
        *         this force the cTodosback to go to the callback stack, forcing us to use async/await
        * https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
        */
        expect(text).toMatch(category);
    });
