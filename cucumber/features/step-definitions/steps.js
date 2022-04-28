const { Given, When, Then } = require('@wdio/cucumber-framework')

const HomePage = require('../page-objects/home.page')
const BatmanPage = require('../page-objects/batman.page')
const NavBar = require('../page-objects/global/navbar')
const MovieList = require('../page-objects/movie.list.page')

// const pages = {
//     home: HomePage
// }

// Given(/^I am on the (\w+) page$/,
//     async (page) => await pages[page].open());

// //When(/^on the navbar I select category "(Todo|Títulos|Episodios de TV)"$/,
//    // async (category) => await NavBar.searchBar.selectCategory(category));

//    When(/^on the navbar I search "(\s+)"$/,
//     async (category) => await NavBar.searchBar.selectCategory(category));

// Then(/^I should see the category dropdown now matches "(Todo|Títulos|Episodios de TV)"$/,
//     async (category) => {
//         // This is a destructuring asignment
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//         const { categoryDropdown} = NavBar.searchBar;
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

const pages = {
  home: HomePage,
}

const batmanPages = {
  thebatman: BatmanPage,
}

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open())

When(/^on the navbar I search "(The Batman)"$/, (movie)=> {
  MovieList.rowHyperlink(movie)
});

When(/^on the list page click "(The Batman) (2022)"$/, (movie, year) => {
   MovieList.movieLink(movie, year).click()
 });

/**
 * Scenario: Validate the Director is Matt Reeves & and than Robert Pattison is the actor
        Given I am on the home page
        And on the navbar I search "The Batman"
        Then I click the option "The Batman 2022"
        And verify if we are in "The Batman 2022" the page
        And verify if the Dirección is "Matt Reeves"
        And verify if "Rober Pattinson" is the Actor
 */

Then(  /^verify if we are in (\w+) page$/, async (pages) => {await batmanPages[pages].open()})
//Then (/^verify if the "(Dirección)" is is "(Matt Reeves)"$/,)
