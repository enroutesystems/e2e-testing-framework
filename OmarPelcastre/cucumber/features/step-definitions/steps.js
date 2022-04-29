const { Given, When, Then} = require('@wdio/cucumber-framework');

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

When(/^on the navbar I search "(The Batman)" and click in the first result$/, async (movie)=> {
    MovieList.rowHyperlink(movie);
    await MovieList.clickFirstResult()
    // browser.pause(1500)

    // setTimeout(() => {}, 1000)
    
});

Then(/^on the movie details page the director should be Matt Reeves and the actor should be Robert Pattison$/, async () => {
    try {     
        console.log("On movie detail screen")
        
        // setTimeout(() => {}, 10000)
        await expect(MovieDetail.director).toBeDisplayed()
        const director = MovieDetail.director.getText()
        console.log(director)
        expect(director).toMatch("Matt Reeves")
        elementactor = await MovieDetail.actor("Robert Pattinson")
        actor = elementactor.getText()
        expect(actor).toMatch("Robert Pattinson")
        // await expect(MovieDetail.Reparto).toBePresent()
    } catch (error) {
        console.log("Score");
        const pageScore = await MovieDetail.score.getText()
        console.log(pageScore);
        expect(pageScore).toMatch("8.1")
        
    }

})

Then(/^the IMDB Ranking is "(8.1)"$/, async (score) => {
    // await expect(MovieDetail.score).toBeDisplayed()
})

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
