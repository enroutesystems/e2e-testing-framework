const { Given, When, Then } = require("@wdio/cucumber-framework");

const HomePage = require("../page-objects/home.page");
const NavBar = require("../page-objects/global/navbar");
const MovieList = require("../page-objects/movie.list.page");
const MovieDetails = require("../page-objects/movie.details");
const TrailerPage = require("../page-objects/trailer.page")

const pages = {
	home: HomePage,
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(
	/^on the navbar I select category "(All|Titles|TV Episodes)"$/,
	async (category) => await NavBar.searchBar.selectCategory(category)
);

When(/^on the navbar I search "(The Batman)"$/, async (movie) => {
	// const result =  MovieList.rowHyperlink(movie);
	const searchInput = NavBar.searchBar.input;
	await searchInput.addValue(movie);
	const searchSubmit = NavBar.searchBar.mag;
	await searchSubmit.click();
});

When(/^on the results page select "(The Batman)"$/, async (movie) => {
	const aElement = MovieList.rowHyperlink();
	await aElement.click();
	await browser.pause(1500);
});

When(
	/^on the details page I verify the Director as "(Matt Reeves)"$/,
	async (director) => {
		const directorElem = MovieDetails.director;
		const text = await directorElem.getText();
		expect(text).toMatch(director);
	}
);

Then(
	/^on details page I verify the main star as "(Robert Pattinson)"$/,
	async (actor) => {
		const starElem = MovieDetails.star(actor);
		const text = await starElem.getText();
		expect(text).toMatch(actor);
	}
);

Then(/^on details page verify IMBD Score as "(8.1)"$/, async (score) => {
	const scoreElem = MovieDetails.score;
	const text = await scoreElem.getText();
	expect(text).toMatch(score);
});

Then(
	/^on details page verify genres matches "(Action|Crime|Drama)"$/,
	async (genre) => {
		const genreElem = MovieDetails.genres(genre);
		const text = await genreElem.getText();
		expect(text).toMatch(genre);
	}
);

Then(
	/^I should see the category dropdown now matches "(All|Titles|TV Episodes)"$/,
	async (category) => {
		const { categoryDropdown } = NavBar.searchBar;
		await categoryDropdown.waitForDisplayed({
			timeout: 1000,
			timeoutMsg: "The Category dropdown was not displayed",
		});
		const text = await categoryDropdown.getText();
		expect(text).toMatch(category);
	}
);

Then(/^I click on play trailer and a new page opens/, async () => {
	const trailerPlay = MovieDetails.trailerPlayer;
	await trailerPlay.click();
})

Then(/^check that an ad is running/, async () => {
	const video = TrailerPage.video;
	// expect(video.getState()).toBe("playing");
	expect(jwplayer().getState()).toBe("playing");
	
})