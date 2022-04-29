const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/movie.list.page');
const movieDetails = require('../page-objects/movie.details')

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, 
    async (page) =>{
        await pages[page].open();
        await browser.setWindowSize(1000, 700)
    });

// When(/^on the navbar I select category "(All|Titles|TV Episodes)"$/, 
//     async (category) => await NavBar.searchBar.selectCategory(category));

When(/^on the navbar I search "(The Batman)"$/, async (movie)=> {
    await NavBar.searchBar.searchMovie(movie);
});

When(/^on the result page I select "(The Batman)"$/, async (movie)=> {
    await NavBar.searchBar.selectMovie(movie);
});

Then(/^I should see that the Director is "(Matt Reeves)" & the actor is "(Robert Pattinson)"$/,async (directorName,actorName)=>{
    const director = await movieDetails.director.getText();
    const actor = await movieDetails.actor.getText();
    expect(director).toMatch(directorName);
    expect(actor).toMatch(actorName);
});

Then (/^I should see that the IMDB Ranking is "(8.1)" Stars$/, async (imbdRating)=>{
    const rating = await movieDetails.imbdRating.getText();
    expect(rating).toMatch(imbdRating)
});

Then(/^I should see that the movie genres are "(Action)" "(Crime)" & "(Drama)"$/,async (genre1, genre2, genre3)=>{
    const firstGenre = await movieDetails.genres.$('a:first-child').getText();
    const secondGenre = await movieDetails.genres.$('a:nth-child(2)').getText();
    const thirthGenre = await movieDetails.genres.$('a:last-child').getText();

    expect(firstGenre).toMatch(genre1);
    expect(secondGenre).toMatch(genre2);
    expect(thirthGenre).toMatch(genre3);
});

Then (/^I should see that the IMDB Ranking is "(8.1)" Stars$/, async (imbdRating)=>{
    const rating = await movieDetails.imbdRating.getText();
    expect(rating).toMatch(8.2)
});

// Then(/^I should see the category dropdown now matches "(All|Titles|TV Episodes)"$/, 
//     async (category) => {
//         // This is a destructuring asignment
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//         const { categoryDropdown } = NavBar.searchBar;
//         await categoryDropdown.waitForDisplayed({
//             timeout: 1000,
//             timeoutMsg: 'The Category dropdown was not displayed'
//         });
//         const text = await categoryDropdown.getText();
//         // Assertions docs: https://jestjs.io/docs/using-matchers
//         /**
//         * Why does this line doesn't use await?
//         * Answer: when selenium is consumed we send a HTTP request to the selenium API
//         *         this force the callback to go to the callback stack, forcing us to use async/await
//         * https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
//         */
//         expect(text).toMatch(category);
//     });
