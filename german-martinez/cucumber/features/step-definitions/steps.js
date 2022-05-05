const { Given, When, Then } = require('@wdio/cucumber-framework')
const HomePage = require('../page-objects/home.page')
const BatmanPage = require('../page-objects/batman.page')
const NavBar = require('../page-objects/global/navbar')
const MovieList = require('../page-objects/movie.list.page')
const { toHome } = require('../page-objects/movie.list.page')

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

Then(/^on the list page click "(The Batman)"$/, async (movie) => {
  const element = await MovieList.movieLink()
  await element.click()
  expect(element).toHaveTextContaining(movie)
})

Then(/^verify if we are in (\w+) page$/, async (page) => {
  await pages[page].open()
})

Then(/^verify if the director is "(Matt Reeves)"$/, async (name) => {
  const element = await MovieList.directorName()
  expect(element).toHaveText(name)
})

Then(/^verify if the actor "(Robert Pattinson)"$/, async (name) => {
  const element = await MovieList.actorName()
  expect(element).toExist()
  expect(element).toHaveText(name)
})

Then(/^I return to the home page/, async () => {
  await MovieList.toHome()
})

// SCENARIO 2

Then(/^validate the ranking in the IMDB is "(8.1)"$/, async (name) => {
  const element = await MovieList.starRank()
  expect(element).toBeExisting()
  expect(element).toHaveText(name)
})

//SCENARIO 3

Then(
  /^validate if movie has genre (.*) and number (.*)$/,
  async (name, number) => {
    const element = await MovieList.nameGenre(number)
    expect(element).toBeExisting()
    expect(element).toHaveText(name)
  }
)
