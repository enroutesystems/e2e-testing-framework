const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const NavBar = require('../page-objects/global/navbar');
const MovieList = require('../page-objects/global/movie.list.page');

const pages = {
    home: HomePage,
    movieList: movieListPage
}

Given(/^I am on the (\w+) page$/, 
    async (page) => await pages[page].open());

And(/^on the navbar I search "(\s+)"$/, (movie)=>{
    NavBar.searchBar.searchText(movie)
})

When(/^on the page I select the first movie$/, 
    async () => {
      await MovieList.movieName;
    })
      
  

Then(/^I should see the director "Matt Reeves" and the star "Robert Pattison"$/, 
    async (category) => {
        const { categoryDropdown} = NavBar.searchBar;
        await categoryDropdown.waitForDisplayed({
            timeout: 1000,
            timeoutMsg: 'The Category dropdown was not displayed'
        });
        const text = await categoryDropdown.getText();
        expect(text).toMatch(category);
    });
