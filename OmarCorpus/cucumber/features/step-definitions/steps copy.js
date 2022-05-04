const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/global/movie.list.page');
const Movie = require('../page-objects/global/movie');
const pages = {
  home: HomePage
}

Given(/^I am on the (\w+) page$/, 
async (page) =>{ 
        await pages[page].open();        
    })

When(/^on the navbar I search "([^"]*)"$/, async (movie)=>{
    await NavBar.searchBar.searchText(movie)
});

Then(/^on the page I select "([^"]*)" movie$/, 
    async (name) => {
    await MovieList.selectMovie(name);
})

Then(/^I should see the director "([^"]*)"$/, 
    async (name) => {
    const { directorName } = Movie;
    await directorName.waitForDisplayed({
        timeout: 2500,
        timeoutMsg: 'The director name was not displayed'
    });
    const text = await directorName.getText();
    expect(text).toMatch(name);
    });

Then(/^I should see the star "([^"]*)"$/, 
    async (name) => {
    const { starName } = Movie;
    await starName.waitForDisplayed({
        timeout: 2500,
        timeoutMsg: 'The star name was not displayed'
    });
    const text = await starName.getText();
    expect(text).toMatch(name);
    });