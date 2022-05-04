class SearchBar {
    constructor(parentLocator) {
      this.parentLocator = parentLocator;
    }
  
    get input() {
      return $(`${this.parentLocator} #suggestion-search`);
    }
  
    get mag() {
      return $(`${this.parentLocator} #iconContext-magnify`);
    }
    
    get categoryDropdown() {
      return $(`${this.parentLocator} .ipc-button`);
    }
  
    async selectCategory(category) {
      // Clicks on the Dropdown
      const dropdown = this.categoryDropdown;
      // Waits for clickable and then clicks
      await dropdown.waitForClickable({
        timeout: 2500,
        timeoutMsg:
          "Either the nabvar or the select category dropdownn were not displayed",
      });
      await dropdown.click();
      // Now wait for the Menu to be dsiplayed and searches the option and click on it
      const dataMenu = await $('[data-menu-id="navbar-search-category-select"]');
      await dataMenu.waitForDisplayed({
        timeout: 2500,
        timeoutMsg: "Data menu was not displayed",
      });
      // DOM Query to children elements, searches a span that has a text that matches our catagery variable
      // https://webdriver.io/docs/selectors#element-with-certain-text
      const item = await dataMenu.$(`span=${category}`);
      await item.waitForClickable({
        timeoutMsg: 1000,
        timeoutMsg: `${category} was not clickable on the menu`,
      });
      await item.click();
    }
  
    async searchMovie(movie) {
      const input = this.input;
      const mag = this.mag;
      await input.waitForClickable({
        timeout: 1000,
        timeoutMsg: "Either the nabvar or the input were not displayed",
      });
      await input.click();
      await input.setValue(movie);
      await mag.waitForClickable({
        timeoutMsg: 1000,
        timeoutMsg: `was not clickable el mag`,
      });
      await mag.click();
    }
  }
  
  module.exports = SearchBar;
  