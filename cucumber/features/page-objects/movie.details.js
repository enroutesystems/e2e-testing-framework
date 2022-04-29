class MovieDetails { 
    

    get director(){
        return $('[data-testid="title-pc-principal-credit"]*="Dirección"').$('a');
    }

    get actor(){
        return $('[data-testid="title-pc-principal-credit"]*="Elenco"').$('a');
    }


}

module.exports = new MovieDetails;
