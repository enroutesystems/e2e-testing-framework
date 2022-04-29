const { Given, When, Then } = require('@wdio/cucumber-framework')
const HomePage = require('../page-objects/home.page')
const BatmanPage = require('../page-objects/batman.page')
const NavBar = require('../page-objects/global/navbar')
const MovieList = require('../page-objects/movie.list.page')
const { toHome } = require('../page-objects/movie.list.page')
const assert = require('assert')
const AssertionError = require('assert').AssertionError

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

// SCENARIO 1
const pages = {
  home: HomePage,
  thebatman: BatmanPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open()
})

When(/^on the navbar I search "(The Batman)"$/, async (movie) => {
  await NavBar.searchBar.input.setValue(movie)
  await NavBar.searchBar.mag.click()
})

Then(/^on the list page click "(The Batman) (2022)"$/, async (movie, year) => {
  await MovieList.movieLink(movie, year).click()
})

Then(/^verify if we are in (\w+) page$/, async (page) => {
  await pages[page].open()
})

Then(/^verify if the director is "(Matt Reeves)"$/, async (name) => {
  await MovieList.directorName(name)
})

Then(/^verify if the actor "(Robert Pattinson)"$/, async (name) => {
  await MovieList.actorName(name)
})

Then(/^I return to the home page/, async () => {
  await MovieList.toHome()
})

// SCENARIO 2

Then(/^validate the ranking in the IMDB is "(8.1)"$/, async (name) => {
  try {
    await expect(MovieList.starRank()).toBeExisting()
    await expect(MovieList.starRank()).toHaveTextContaining(name)
  } catch (e) {
    throw new assert.AssertionError(e)
  }
})

//SCENARIO 3

Then(
  /^validate if movie has genre (.*) and number (.*)$/,
  async (name, number) => {
    try {
      const element = await MovieList.nameGenre(number)
      await expect(element).toBeExisting()
      await expect(element).toHaveTextContaining(name)
    } catch (e) {
      throw new assert.AssertionError(e)
    }
  }
)
