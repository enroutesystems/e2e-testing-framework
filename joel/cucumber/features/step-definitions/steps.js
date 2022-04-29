const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/movie.list.page')
const MovieAssert = require('../page-objects/movie.assert.page')

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, 
    async (page) => await pages[page].open());
    
When(/^on the navbar I search movie "(The Batman)"$/, 
    async (movie)=> await NavBar.searchBar.searchMovie(movie));

Then(/^I select the movie$/, 
    async () => await MovieList.goToMovie());
    
Then (/^check if the director is "(Matt Reeves)"$/, async (name) => {
    await MovieAssert.compareDirector(name);
});

Then (/^check if the actor is "(Robert Pattinson)"$/, async (name) => {
    await MovieAssert.compareActor(name);
});

Then (/^check if the movie has "([^"]*)" stars$/, async (name) => {
    await MovieAssert.compareRanking(name);
});

Then (/^check if the movie has the genre of "(Acción)"$/, async (genre) => {
    await MovieAssert.compareGenre(genre);
});

Then (/^check if the movie has the genre of "(Crimen)"$/, async (genre) => {
    await MovieAssert.compareGenre(genre);
});

Then (/^check if the movie has the genre of "(Drama)"$/, async (genre) => {
    await MovieAssert.compareGenre(genre);
});

When(/^on the navbar I select category "(Todo|Títulos|Episodios de TV)"$/, 
    async (category) => await NavBar.searchBar.selectCategory(category));

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
        *         this force the callback to go to the callback stack, forcing us to use async/await
        * https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
        */
        expect(text).toMatch(category);
    });