class SearchBar {
    constructor(parentLocator) {
        this.parentLocator = parentLocator;
    }

    get input() {
        return $(`${this.parentLocator} .react-autosuggest__input`);
        //return $(`.react-autosuggest__input`);

    }

    // get mag() {
    //     return $(`${this.parentLocator} #iconContext-magnify`);
    // }
    
    get categoryDropdown() {
        return $(`${this.parentLocator} .ipc-button`);
    }

    get moviesListDropdown() {
       // return $(`${this.parentLocator} .react-autosuggest__suggestions-list`)
       return $(`.react-autosuggest__suggestions-list`)
    }

    get movieLi(){
        return $(`${this.parentLocator} #react-autowhatever-1--item-0`)
    }


    // async searchMovie(movie){
    //     const input = this.input;
    //     // Waits for clickable and then clicks
    //     await input.waitForClickable({ 
    //         timeout: 2500, 
    //         timeoutMsg: 'input is not able to be clickable' 
    //     });
    //     await input.click();

    //     const value = movie
    //     const arrValue = [...value]; // This is for converting string to charArray

    //     for(let i = 0 ; i< arrValue.length; i++) {
    //         browser.keys(arrValue[i] );
    //         bro

    async searchMovie(movie){
        const input = await this.input;
        // Waits for clickable and then clicks
        await input.waitForClickable({ 
            timeout: 2500, 
            timeoutMsg: 'input is not able to be clickable' 
        });
        await input.click();
        await input.setValue(movie)

    }

    async selectMovie(movie) {
        const moviesList = await this.moviesListDropdown;
        await moviesList.waitForDisplayed({
            timeout: 2500,
            timeoutMsg: `The movies list was not displayed`
        })

        const movieLi = await moviesList.$(`li:first-child`)
        await movieLi.waitForDisplayed({
            timeout: 2500,
            timeoutMsg: `${movie} was not displayed`
        })
        
        const item = await movieLi.$('a:first-child');
        await item.waitForClickable({
            timeout: 1000,
            timeoutMsg: `${movie} was not clickable`
        });
        await item.click();
    }



    /**
     * Method that opens the category menu and selects 1
     */
    async selectCategory(category) {
        // Clicks on the Dropdown
        const dropdown = this.categoryDropdown;
        // Waits for clickable and then clicks
        await dropdown.waitForClickable({ 
            timeout: 2500, 
            timeoutMsg: 'Either the nabvar or the select category dropdownn were not displayed' 
        });
        await dropdown.click();
        // Now wait for the Menu to be dsiplayed and searches the option and click on it
        const dataMenu = await $('[data-menu-id="navbar-search-category-select"]');
        await dataMenu.waitForDisplayed({
            timeout: 2500,
            timeoutMsg: 'Data menu was not displayed'
        });
        // DOM Query to children elements, searches a span that has a text that matches our catagery variable
        // https://webdriver.io/docs/selectors#element-with-certain-text
        const item = await dataMenu.$(`span=${category}`)
        await item.waitForClickable({
            timeoutMsg: 1000,
            timeoutMsg: `${category} was not clickable on the menu`
        });
        await item.click();
    }
}

/**
 * Constructor requires parent locator
 */
module.exports = SearchBar;