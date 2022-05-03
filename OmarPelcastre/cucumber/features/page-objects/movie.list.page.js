class MovieList { 
    
    constructor(tableId = 1) {
        this.parentLocator = `.findSection:nth-of-child(${tableId})`;
    }

    get bottomLink() {
        return $('....')
    }

    rowHyperlink() {
        return $(`.result_text`).$(`a`);
    }

    getFirstRow(){
        return $('.findResult odd')
    }

    async clickFirstResult(){
        try {
            await this.getFirstRow().click()
            console.log("first result is clicked")
        } catch (error) {
            
        }
    }

    getGenre(){
        return $('.sc-16ede01-3 bYNgQ ipc-chip ipc-chip--on-baseAlt')
    }

    
}

module.exports = new MovieList;