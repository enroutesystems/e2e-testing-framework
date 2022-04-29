class MovieDetails { 
    

    get director(){
        return $('[data-testid="title-pc-principal-credit"]*="Dirección"').$('a');
    }

    get actor(){
        return $('[data-testid="title-pc-principal-credit"]*="Elenco"').$('a');
    }

  get imbdRating(){
        return $();
    }
}

module.exports = new MovieDetails;
